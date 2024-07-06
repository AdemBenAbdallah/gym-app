import { Horizontal, Vertical } from "@/core/components/MantineLayout";
import Layout from "@/core/layouts/Layout";
import addTodo from "@/features/todos/mutations/addTodo";
import clearCompleted from "@/features/todos/mutations/clearCompleted";
import toggleTodo from "@/features/todos/mutations/toggleTodo";
import getTodos from "@/features/todos/queries/getTodos";
import { InputAddTodo } from "@/features/todos/schemas";
import { BlitzPage } from "@blitzjs/next";
import { useMutation, useQuery } from "@blitzjs/rpc";
import { Button, Checkbox, List, Loader, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { Suspense } from "react";
import { z } from "zod";

// type TodosType = PromiseReturnType<typeof getTodos>;
// type TodoType = TodoType[number];

type TodoFormType = z.infer<typeof InputAddTodo>;

const Todos = () => {
  const form = useForm<TodoFormType>({
    initialValues: {
      todoTitle: "",
    },
    validate: zodResolver(InputAddTodo),
  });
  const [todos] = useQuery(getTodos, {});
  const [$addTodo] = useMutation(addTodo, {});
  const [$toggleTodo] = useMutation(toggleTodo, {});
  const [$clearCompleted] = useMutation(clearCompleted, {});

  return (
    <Vertical maw={800}>
      <form
        onSubmit={form.onSubmit(async (values) => {
          await $addTodo(values);
          form.setFieldValue("todoTitle", "");
        })}
      >
        <Vertical>
          <TextInput placeholder="Enter your todo" {...form.getInputProps("todoTitle")} />
          <Horizontal gap={10}>
            <Button type="submit">Create A Todo</Button>
            <Button
              onClick={async () => {
                await $clearCompleted({});
              }}
            >
              Clear Todo
            </Button>
          </Horizontal>
        </Vertical>
      </form>
      <List>
        <Vertical gap={10}>
          {todos.map((item, idx) => (
            <Checkbox key={idx} checked={item.done} label={item.title} onChange={() => $toggleTodo({ id: item.id })} />
          ))}
        </Vertical>
      </List>
    </Vertical>
  );
};
const TodosPage: BlitzPage = () => {
  return (
    <Layout title="Todos">
      <Suspense fallback={<Loader />}>
        <Todos />
      </Suspense>
    </Layout>
  );
};

export default TodosPage;

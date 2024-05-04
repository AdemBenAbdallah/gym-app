import { BlitzPage } from "@blitzjs/next";
import React, { Suspense, useState } from "react";
import { useMutation, useQuery } from "@blitzjs/rpc";
import { Button, Checkbox, List, Loader, TextInput } from "@mantine/core";
import getTodos from "@/features/todos/queries/getTodos";
import Layout from "@/core/layouts/Layout";
import addTodo from "@/features/todos/mutations/addTodo";
import { Horizontal, Vertical } from "@/core/components/MantineLayout";
import toggleTodo from "@/features/todos/mutations/toggleTodo";
import clearCompleted from "@/features/todos/mutations/clearCompleted";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import { InputAddTodo } from "@/features/todos/schemas";

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
      <form onSubmit={form.onSubmit(async (values) => await $addTodo(values))}>
        <TextInput
          placeholder="Enter your todo"
          {...form.getInputProps("todoTitle")}
        />
        <Horizontal gap={20}>
          <Button type="submit">Create A Todo</Button>
          <Button
            onClick={async () => {
              await $clearCompleted({});
            }}
          >
            Clear Todo
          </Button>
        </Horizontal>
      </form>
      <List>
        <Vertical gap={10}>
          {todos.map((item, idx) => (
            <Checkbox
              key={idx}
              checked={item.done}
              label={item.title}
              onChange={() => $toggleTodo({ id: item.id })}
            />
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

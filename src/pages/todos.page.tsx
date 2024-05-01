import { BlitzPage } from "@blitzjs/next";
import React, { useState } from "react";
import { useMutation, useQuery } from "@blitzjs/rpc";
import { Button, Checkbox, Input, List, Loader } from "@mantine/core";
import { Suspense } from "react";
import getTodos from "@/features/todos/queries/getTodos";
import Layout from "@/core/layouts/Layout";
import addTodo from "@/features/todos/mutations/addTodo";
import { Horizontal, Vertical } from "@/core/components/MantineLayout";
import toggleTodo from "@/features/todos/mutations/toggleTodo";
import clearCompleted from "@/features/todos/mutations/clearCompleted";

// type TodosType = PromiseReturnType<typeof getTodos>;
// type TodoType = TodoType[number];

const Todos = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todos] = useQuery(getTodos, {});

  const [$addTodo] = useMutation(addTodo, {});
  const [$toggleTodo] = useMutation(toggleTodo, {});
  const [$clearCompleted] = useMutation(clearCompleted, {});

  return (
    <Vertical maw={800}>
      <Input
        placeholder="Enter your todo"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.currentTarget.value)}
      />
      <Horizontal gap={20}>
        <Button
          onClick={async () => {
            await $addTodo({ todoTitle });
          }}
        >
          Create A Todo
        </Button>
        <Button
          onClick={async () => {
            await $clearCompleted({});
          }}
        >
          Clear Todo
        </Button>
      </Horizontal>

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
      {" "}
      <Suspense fallback={<Loader />}>
        <Todos />
      </Suspense>
    </Layout>
  );
};

export default TodosPage;

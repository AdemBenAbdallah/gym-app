import { BlitzPage } from "@blitzjs/next";
import React, { useState } from "react";
import { useMutation, useQuery } from "@blitzjs/rpc";
import { Button, Checkbox, Input, List, Loader } from "@mantine/core";
import { Suspense } from "react";
import getTodos from "@/features/todos/queries/getTodos";
import Layout from "@/core/layouts/Layout";
import addTodo from "@/features/todos/mutations/addTodo";
import { Vertical } from "@/core/components/MantineLayout";
import toggleTodo from "@/features/todos/mutations/toggleTodo";

const Todos = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todos, { refetch }] = useQuery(getTodos, {});

  const [$addTodo] = useMutation(addTodo, {
    onSuccess: async () => {
      await refetch();
    },
  });
  const [$toggleTodo] = useMutation(toggleTodo, {});

  return (
    <Vertical maw={800}>
      <Input
        placeholder="Enter your todo"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.currentTarget.value)}
      />
      <Button
        onClick={async () => {
          await $addTodo({ todoTitle });
        }}
      >
        Create a todo
      </Button>
      <List>
        <Vertical gap={10}>
          {todos.map((item, idx) => (
            <Checkbox
              key={idx}
              checked={item.done}
              label={item.title}
              onClick={() => $toggleTodo({ id: item.id })}
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

import { BlitzPage } from "@blitzjs/next";
import React from "react";
import { useMutation, useQuery } from "@blitzjs/rpc";
import { Button, List, Loader } from "@mantine/core";
import { Notification } from "@mantine/core";
import { Suspense } from "react";
import getTodos from "@/features/todos/queries/getTodos";
import Layout from "@/core/layouts/Layout";
import addTodo from "@/features/todos/mutations/addTodo";
import { Vertical } from "@/core/components/MantineLayout";

const Todos = () => {
  const [todos] = useQuery(getTodos, { search: "212115" });
  const [$addTodo] = useMutation(addTodo, {
    onSuccess: (result) => {
      <Notification title="We notify you that">{result}</Notification>;
    },
  });

  return (
    <Vertical>
      <Button
        onClick={async () => {
          await $addTodo({ todoTitle: "drink watter" });
        }}
      >
        Create a todo
      </Button>
      <List>
        {todos.map((item, idx) => (
          <div key={idx}>
            <List.Item key={idx}>{item.title}</List.Item>
          </div>
        ))}
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

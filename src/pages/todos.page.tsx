import { BlitzPage } from "@blitzjs/next";
import React from "react";
import { useQuery } from "@blitzjs/rpc";
import { List, Loader } from "@mantine/core";
import { Suspense } from "react";
import getTodos from "@/features/todos/queries/getTodos";
import Layout from "@/core/layouts/Layout";

const Todos = () => {
  const [todos] = useQuery(getTodos, { search: "212115" });
  return (
    <List>
      {todos.map((item, idx) => (
        <div key={idx}>
          <List.Item key={idx}>{item.title}</List.Item>
        </div>
      ))}
    </List>
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

import fetchTodos from "@/features/todos/queries/fetchTodos";
import { useCurrentUser } from "@/features/users/hooks/useCurrentUser";
import { useQuery } from "@blitzjs/rpc";
import { List, Loader } from "@mantine/core";
import { Suspense } from "react";

const Todos = () => {
  const [todos] = useQuery(fetchTodos, {});
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
const UserInfo = () => {
  const currentUser = useCurrentUser();

  if (!currentUser) return;
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Todos />
      </Suspense>
      <div>
        User id: <code>{currentUser.id}</code>
        <br />
        User role: <code>{currentUser.role}</code>
      </div>
    </>
  );
};

export default UserInfo;

import fetchTodos from "@/features/todos/queries/fetchTodos";
import { useCurrentUser } from "@/features/users/hooks/useCurrentUser";
import { useQuery } from "@blitzjs/rpc";
import { List, Loader } from "@mantine/core";

const UserInfo = () => {
  const currentUser = useCurrentUser();
  const [todos, { isLoading }] = useQuery(fetchTodos, {}, { suspense: false });

  if (!currentUser) return;
  return (
    <>
      <List>
        {isLoading && <Loader />}
        {todos &&
          todos.map((item, idx) => (
            <div key={idx}>
              <List.Item key={idx}>{item.title}</List.Item>
            </div>
          ))}
      </List>
      <div>
        User id: <code>{currentUser.id}</code>
        <br />
        User role: <code>{currentUser.role}</code>
      </div>
    </>
  );
};

export default UserInfo;

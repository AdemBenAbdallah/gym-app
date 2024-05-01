import { useCurrentUser } from "@/features/users/hooks/useCurrentUser";
import { Routes } from "@blitzjs/next";
import { Button } from "@mantine/core";
import Link from "next/link";

const UserInfo = () => {
  const currentUser = useCurrentUser();

  if (!currentUser) return;
  return (
    <>
      <div>
        User id: <code>{currentUser.id}</code>
        <br />
        User role: <code>{currentUser.role}</code>
      </div>
      <Button component={Link} href={Routes.TodosPage()}>
        todos
      </Button>
    </>
  );
};

export default UserInfo;

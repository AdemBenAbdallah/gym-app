import { useCurrentUser } from "@/features/users/hooks/useCurrentUser";
import { Routes } from "@blitzjs/next";
import { Button } from "@mantine/core";
import Link from "next/link";
import { Vertical } from "./MantineLayout";

const UserInfo = () => {
  const currentUser = useCurrentUser();

  if (!currentUser) return;
  return (
    <Vertical mx={"auto"}>
      <div>
        User name: <code>{currentUser.name}</code>
        <br />
        User role: <code>{currentUser.role}</code>
      </div>
      <Button component={Link} href={Routes.TodosPage()}>
        todos
      </Button>
    </Vertical>
  );
};

export default UserInfo;

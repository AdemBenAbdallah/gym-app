import Layout from "src/core/layouts/Layout";
import { BlitzPage } from "@blitzjs/next";
import UserInfo from "@/core/components/UserInfo";
import React from "react";
import { Vertical } from "@/core/components/MantineLayout";
import { AuthenticationForm } from "@/core/components/MainAuthForm";
import { useCurrentUser } from "@/features/users/hooks/useCurrentUser";
import { useMutation } from "@blitzjs/rpc";
import { Button } from "@mantine/core";

const Home: BlitzPage = () => {
  const currentUser = useCurrentUser();

  return (
    <Layout title="Home">
      {currentUser && (
        <Vertical align="center">
          <UserInfo />
          <Button w={"fit-content"}>send test email</Button>
        </Vertical>
      )}

      {!currentUser && (
        <Vertical fullH align="center" justify="center">
          <AuthenticationForm />
        </Vertical>
      )}
    </Layout>
  );
};

export default Home;

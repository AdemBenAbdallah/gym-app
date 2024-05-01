import Layout from "src/core/layouts/Layout";
import { BlitzPage } from "@blitzjs/next";
import UserInfo from "@/core/components/UserInfo";
import React from "react";
import { Vertical } from "@/core/components/MantineLayout";
import { AuthenticationForm } from "@/core/components/MainAuthForm";
import { useCurrentUser } from "@/features/users/hooks/useCurrentUser";

const Home: BlitzPage = () => {
  const currentUser = useCurrentUser();
  return (
    <Layout title="Home">
      {currentUser && <UserInfo />}

      {!currentUser && (
        <Vertical fullH align="center" justify="center">
          <AuthenticationForm />
        </Vertical>
      )}
    </Layout>
  );
};

export default Home;

import Layout from "src/core/layouts/Layout";
import { BlitzPage } from "@blitzjs/next";
import UserInfo from "@/core/components/UserInfo";
import React from "react";
import { Vertical } from "@/core/components/MantineLayout";
import { AuthenticationForm } from "@/core/components/MantineAuthForm";

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <UserInfo />

      <Vertical fullH align="center" justify="center">
        <AuthenticationForm />
      </Vertical>
    </Layout>
  );
};

export default Home;

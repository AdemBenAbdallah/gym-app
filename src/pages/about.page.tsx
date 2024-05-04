import Layout from "@/core/layouts/Layout";
import { BlitzPage } from "@blitzjs/next";
import React from "react";

const AboutPage: BlitzPage = () => {
  return <Layout>AboutPage</Layout>;
};

AboutPage.authenticate = true;

export default AboutPage;

import Layout from "@/core/layouts/Layout";
import { useStringQueryPram } from "@/utils/utils";
import { BlitzPage } from "@blitzjs/next";

const VerifyEmail: BlitzPage = () => {
  const token = useStringQueryPram("token");
  return <Layout>token: {token}</Layout>;
};

export default VerifyEmail;

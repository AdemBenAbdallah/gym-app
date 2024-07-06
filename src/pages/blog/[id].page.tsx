import Layout from "@/core/layouts/Layout";
import { useStringParam } from "@/utils/utils";
import { BlitzPage } from "@blitzjs/next";

const BlogDetails: BlitzPage = () => {
  const id = useStringParam("id");
  return (
    <Layout title="Blog Details">
      id: {id}
      BlogDetails
    </Layout>
  );
};

export default BlogDetails;

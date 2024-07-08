import Layout from "@/core/layouts/Layout";
import { BlitzPage } from "@blitzjs/next";
import { Tabs, rem } from "@mantine/core";
import { IconBrandBooking, IconTablePlus } from "@tabler/icons-react";
import AllBlog from "./components/AllBlog";
import MyBlog from "./components/MyBlog";

const BlogPage: BlitzPage = () => {
  const iconStyle = { width: rem(20), height: rem(20) };

  return (
    <Layout title="Blog">
      <Tabs defaultValue="gallery">
        <Tabs.List w={"fit-content"}>
          <Tabs.Tab value="gallery" leftSection={<IconBrandBooking style={iconStyle} />}>
            Tous les blogs
          </Tabs.Tab>
          <Tabs.Tab value="messages" leftSection={<IconTablePlus style={iconStyle} />}>
            Mes contributions
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery">
          <AllBlog />
        </Tabs.Panel>

        <Tabs.Panel value="messages">
          <MyBlog />
        </Tabs.Panel>
      </Tabs>
    </Layout>
  );
};

BlogPage.authenticate = true;
export default BlogPage;

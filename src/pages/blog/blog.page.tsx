import Layout from "@/core/layouts/Layout";
import { BlitzPage } from "@blitzjs/next";
import { Tabs, rem } from "@mantine/core";
import { IconMessageCircle, IconPhoto } from "@tabler/icons-react";
import AllBlog from "./components/AllBlog";
import MyBlog from "./components/MyBlog";

const BlogPage: BlitzPage = () => {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Layout title="Blog">
      <Tabs defaultValue="gallery">
        <Tabs.List>
          <Tabs.Tab value="gallery" leftSection={<IconPhoto style={iconStyle} />}>
            All Blog
          </Tabs.Tab>
          <Tabs.Tab value="messages" leftSection={<IconMessageCircle style={iconStyle} />}>
            My contributions
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

export default BlogPage;

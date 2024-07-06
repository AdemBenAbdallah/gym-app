import Layout from "@/core/layouts/Layout";
import getBlogById from "@/features/blogs/queries/getBlogById";
import { getUploadThingUrl } from "@/utils/image-utils";
import { useStringParam } from "@/utils/utils";
import { BlitzPage, Routes } from "@blitzjs/next";
import { useQuery } from "@blitzjs/rpc";
import { Button, Container, Image, Stack, Text, Title, TypographyStylesProvider } from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import Link from "next/link";

const BlogDetails: BlitzPage = () => {
  const id = useStringParam("id");
  const [blogDetails] = useQuery(getBlogById, { id });
  return (
    <Layout title="Blog Details">
      <Container pb={80}>
        <Stack>
          <Button
            variant="default"
            style={{ border: "none" }}
            leftSection={<IconArrowNarrowLeft size={25} />}
            component={Link}
            href={Routes.BlogPage()}
            size="md"
          >
            Back to blogs
          </Button>
          <Stack gap={0}>
            <Title order={1}>{blogDetails?.title}</Title>
            <Text c={"gray"}>{blogDetails?.category}</Text>
          </Stack>
          <Stack gap={100}>
            <Image w={"100%"} src={getUploadThingUrl(blogDetails?.blogImageKey)} alt="blog image" />
            <TypographyStylesProvider>
              <div dangerouslySetInnerHTML={{ __html: blogDetails?.content || "" }} />
            </TypographyStylesProvider>
          </Stack>
        </Stack>
      </Container>
    </Layout>
  );
};

export default BlogDetails;

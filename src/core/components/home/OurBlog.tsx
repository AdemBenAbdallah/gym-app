import { Vertical } from "@/core/components/MantineLayout";
import getBlogs from "@/features/blogs/queries/getBlogs";
import { useInfiniteQuery } from "@blitzjs/rpc";
import { Container, SimpleGrid, Text, Title, rem } from "@mantine/core";
import React from "react";
import { BlogCard } from "../BlogCard";

const OurBlog = () => {
  const [blogPages] = useInfiniteQuery(getBlogs, (page = { take: 3, skip: 0 }) => page, {
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  return (
    <Container size="lg" mt={100}>
      <Vertical gap={0}>
        <Text> Blog</Text>
        <Title fz={{ base: rem(35), md: rem(50) }}>Articale from tasking</Title>
      </Vertical>
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={{ base: 30, md: 50 }}>
        {blogPages.map((page, i) => (
          <React.Fragment key={i}>
            {page.blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default OurBlog;

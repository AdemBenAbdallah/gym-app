import { BlogCard } from "@/core/components/BlogCard";
import { InputWithButton } from "@/core/components/InputWithButton";
import getBlogs from "@/features/blogs/queries/getBlogs";
import { BlogType } from "@/features/blogs/schema";
import { useInfiniteQuery } from "@blitzjs/rpc";
import { Button, Group, Modal, Select, SimpleGrid, Stack } from "@mantine/core";
import { useDebouncedState, useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import AddBlog from "./AddBlog";

const MyBlog = () => {
  const [search, setSearch] = useDebouncedState("", 200);
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogType | null>(null);
  const [blogPages, { isFetchingNextPage, fetchNextPage, hasNextPage }] = useInfiniteQuery(
    getBlogs,
    (page = { take: 1, skip: 0 }) => page,
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    },
  );

  return (
    <Stack p={20}>
      <Group justify="space-between">
        <Group>
          <InputWithButton defaultValue={search} onChange={(event) => setSearch(event.currentTarget.value)} w={400} />
          <Select w={120} radius="xl" size="md" placeholder="Gender" data={[{ value: "", label: "All" }]} />
        </Group>
        <Button onClick={open} radius={"md"} c={"white"}>
          Add Blog
        </Button>
      </Group>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="xl">
        {blogPages.map((page, i) => (
          <Stack key={i}>
            {page.blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} setSelectedBlog={setSelectedBlog} updateModalOpen={open} />
            ))}
          </Stack>
        ))}
      </SimpleGrid>
      <Stack>
        <div>
          <button onClick={() => fetchNextPage()} disabled={!hasNextPage || !!isFetchingNextPage}>
            {isFetchingNextPage ? "Loading more..." : hasNextPage ? "Load More" : "Nothing more to load"}
          </button>
        </div>
      </Stack>
      <Modal opened={opened} onClose={close} fullScreen>
        <AddBlog close={close} blog={selectedBlog} />
      </Modal>
    </Stack>
  );
};

export default MyBlog;

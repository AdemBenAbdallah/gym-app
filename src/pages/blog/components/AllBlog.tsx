import { BlogCard } from "@/core/components/BlogCard";
import { InputWithButton } from "@/core/components/InputWithButton";
import getBlogs from "@/features/blogs/queries/getBlogs";
import { useInfiniteQuery } from "@blitzjs/rpc";
import { Group, Select, SimpleGrid, Stack } from "@mantine/core";
import { useDebouncedState } from "@mantine/hooks";

const AllBlog = () => {
  const [search, setSearch] = useDebouncedState("", 200);
  const [blogPages, { isFetchingNextPage, fetchNextPage, hasNextPage }] = useInfiniteQuery(
    getBlogs,
    (page = { take: 1, skip: 0 }) => page,
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    },
  );

  return (
    <Stack p={20}>
      <Group>
        <InputWithButton defaultValue={search} onChange={(event) => setSearch(event.currentTarget.value)} w={400} />
        <Select w={120} radius="xl" size="md" placeholder="Gender" data={[{ value: "", label: "All" }]} />
      </Group>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="xl">
        {blogPages.map((page, i) => (
          <Stack key={i}>
            {page.blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
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
    </Stack>
  );
};

export default AllBlog;

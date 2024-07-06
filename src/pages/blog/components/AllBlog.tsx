import { BlogCard } from "@/core/components/BlogCard";
import { InputWithButton } from "@/core/components/InputWithButton";
import getBlogs from "@/features/blogs/queries/getBlogs";
import { useInfiniteQuery } from "@blitzjs/rpc";
import { Button, Group, Select, SimpleGrid, Stack } from "@mantine/core";
import { useDebouncedState } from "@mantine/hooks";
import React, { useState } from "react";

const AllBlog = () => {
  const [search, setSearch] = useDebouncedState("", 200);
  const [categoryFilter, setCategoryFilter] = useState<string | null>("");
  const [blogPages, { isFetchingNextPage, fetchNextPage, hasNextPage }] = useInfiniteQuery(
    getBlogs,
    (page = { take: 1, skip: 0 }) => ({
      ...page,
      where: {
        title: { contains: search, mode: "insensitive" },
        category: { contains: categoryFilter === "All" ? "" : categoryFilter },
      },
    }),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    },
  );
  return (
    <Stack p={20}>
      <Group>
        <InputWithButton defaultValue={search} onChange={(event) => setSearch(event.currentTarget.value)} w={400} />
        <Select
          radius="xl"
          size="lg"
          placeholder="Choisissez une catégorie"
          value={categoryFilter}
          onChange={setCategoryFilter}
          data={[
            "All",
            "Entraînement",
            "Nutrition",
            "Santé mentale",
            "Motivation",
            "Récupération",
            "Techniques avancées",
            "Histoires de réussite",
            "Conseils pour débutants",
            "Exercices spécifiques",
            "Équipement de gym",
          ]}
        />
      </Group>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="xl">
        {blogPages.map((page, i) => (
          <React.Fragment key={i}>
            {page.blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      <Stack>
        <div>
          <Button onClick={() => fetchNextPage()} disabled={!hasNextPage || !!isFetchingNextPage}>
            {isFetchingNextPage ? "Loading more..." : hasNextPage ? "Load More" : "Nothing more to load"}
          </Button>
        </div>
      </Stack>
    </Stack>
  );
};

export default AllBlog;

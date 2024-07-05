import { InputWithButton } from "@/core/components/InputWithButton";
import RenderTable, { Column } from "@/core/components/RenderTable";
import UserAvatar from "@/core/components/UserAvatar";
import Layout from "@/core/layouts/Layout";
import getUsersByAdmin from "@/features/users/queries/getUsersByAdmin";
import { GlobalModal } from "@/modals";
import { calculateAge } from "@/utils/utils";
import { BlitzPage } from "@blitzjs/next";
import { usePaginatedQuery } from "@blitzjs/rpc";
import { Badge, Button, Center, Flex, Group, Paper, Select, Stack } from "@mantine/core";
import { useDebouncedState } from "@mantine/hooks";
import { openContextModal } from "@mantine/modals";
import { GenderType } from "@prisma/client";
import { IconEdit, IconGenderFemale, IconGenderMale } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useState } from "react";

type FilterGenderType = {
  value: GenderType;
  label: string;
};
const ITEMS_PER_PAGE = 10;
const CoachesPage: BlitzPage = () => {
  const [genderFilter, setGenderFilter] = useState<FilterGenderType | null>(null);
  const [search, setSearch] = useDebouncedState("", 200);

  const router = useRouter();
  const page = Number(router.query.page) || 0;
  const [{ users, count, from, to }] = usePaginatedQuery(getUsersByAdmin, {
    orderBy: { id: "asc" },
    where: {
      role: "COACH",
      name: search ? { contains: search, mode: "insensitive" } : undefined,
      gender: genderFilter?.value || undefined,
    },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  });

  type UserType = (typeof users)[number];
  const columns: Column<UserType>[] = [
    {
      header: "Utilisateur",
      accessor: (user: UserType) => (
        <Group>
          <UserAvatar user={user} />
          {user.name}
        </Group>
      ),
    },
    { header: "E-mail", accessor: "email" },
    { header: "Âge", accessor: (user: UserType) => calculateAge(user.birthdayDate) },
    {
      header: "Genre",
      accessor: (user: UserType) => (
        <Badge bg={user.gender === "MALE" ? "ocean-blue" : "bright-pink"} size="lg" circle>
          <Center>{user.gender === "MALE" ? <IconGenderMale size={20} /> : <IconGenderFemale size={20} />}</Center>
        </Badge>
      ),
    },
    {
      header: "",
      accessor: (user: UserType) => (
        <Group>
          <IconEdit
            stroke={1}
            onClick={() =>
              openContextModal({
                modal: GlobalModal.AddUserSubsctiption,
                title: "Ajouter une nouvelle durée d'abonnement",
                innerProps: { userId: user.id },
              })
            }
            style={{ cursor: "pointer" }}
            size={25}
          />
        </Group>
      ),
    },
  ];

  return (
    <Layout title="Coaches">
      <Flex gap={20}>
        <Paper radius={"md"} bg={"lime.1"} miw={300}></Paper>
        <Stack flex={8} gap={30}>
          <Group justify="space-between">
            <Group>
              <InputWithButton
                defaultValue={search}
                onChange={(event) => setSearch(event.currentTarget.value)}
                w={400}
              />
              <Select
                w={120}
                radius="xl"
                size="md"
                placeholder="Gender"
                data={[
                  { value: "", label: "All" },
                  { value: "MALE", label: "Male" },
                  { value: "FEMALE", label: "Female" },
                ]}
                value={genderFilter ? genderFilter.value : null}
                onChange={(_value, option: FilterGenderType) => setGenderFilter(option)}
              />
            </Group>
            <Button radius={"md"} c={"white"}>
              Add Coach
            </Button>
          </Group>
          {users && (
            <RenderTable
              data={users}
              columns={columns}
              totalCount={count}
              currentPage={page + 1}
              onPageChange={(newPage: number) => router.push({ query: { page: newPage - 1 } })}
              itemsPerPage={ITEMS_PER_PAGE}
              from={from}
              to={to}
            />
          )}
        </Stack>
      </Flex>
    </Layout>
  );
};

export default CoachesPage;

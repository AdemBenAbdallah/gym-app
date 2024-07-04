import { InputWithButton } from "@/core/components/InputWithButton";
import { StatsRing } from "@/core/components/StatsRing";
import UserAvatar from "@/core/components/UserAvatar";
import Layout from "@/core/layouts/Layout";
import getUsersByAdmin from "@/features/users/queries/getUsersByAdmin";
import { GlobalModal } from "@/modals";
import { BlitzPage } from "@blitzjs/next";
import { usePaginatedQuery } from "@blitzjs/rpc";
import { Badge, Center, Flex, Group, Pagination, Select, Stack, Table, Text, rem } from "@mantine/core";
import { useDebouncedState } from "@mantine/hooks";
import { openContextModal } from "@mantine/modals";
import { GenderType } from "@prisma/client";
import { IconEdit, IconEye, IconGenderFemale, IconGenderMale } from "@tabler/icons-react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useState } from "react";

const ITEMS_PER_PAGE = 10;

const calculateAge = (birthdayDate: Date) => {
  const birthDate = dayjs(birthdayDate);
  const today = dayjs();
  let age = today.year() - birthDate.year();
  if (today.month() < birthDate.month() || (today.month() === birthDate.month() && today.date() < birthDate.date())) {
    age--;
  }
  return age;
};

type FilterGenderType = {
  value: GenderType;
  label: string;
};

const UsersPage: BlitzPage = () => {
  const [genderFilter, setGenderFilter] = useState<FilterGenderType | null>(null);
  const [search, setSearch] = useDebouncedState("", 200);

  const router = useRouter();
  const page = Number(router.query.page) || 0;
  const [{ users, count, pageCount, from, to }] = usePaginatedQuery(getUsersByAdmin, {
    orderBy: { id: "asc" },
    where: {
      role: "USER",
      name: search ? { contains: search, mode: "insensitive" } : undefined,
      gender: genderFilter?.value || undefined,
    },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  });

  const rows = users.map((user) => (
    <Table.Tr key={user.name}>
      <Table.Td>
        <Group>
          <UserAvatar user={user} />
          {user.name}
        </Group>
      </Table.Td>
      <Table.Td>{user.email}</Table.Td>
      <Table.Td>{calculateAge(user.birthdayDate)}</Table.Td>
      <Table.Td>
        {user.gender === "MALE" && (
          <Badge bg="ocean-blue" size="lg" circle>
            <Center>
              <IconGenderMale size={20} />
            </Center>
          </Badge>
        )}
        {user.gender === "FEMALE" && (
          <Badge bg="bright-pink" size="lg" circle>
            <Center>
              <IconGenderFemale size={20} />
            </Center>
          </Badge>
        )}
      </Table.Td>
      <Table.Td>{dayjs(user.lastSubscription?.startDate).format("YYYY-MM-DD")}</Table.Td>
      <Table.Td>{dayjs(user.lastSubscription?.endDate).format("YYYY-MM-DD")}</Table.Td>
      <Table.Td>
        <Group>
          <IconEdit
            stroke={1}
            onClick={() =>
              openContextModal({
                modal: GlobalModal.AddUserSubsctiption,
                title: "Ajouter une nouvelle durée d'abonnement",
                innerProps: {
                  userId: user.id,
                },
              })
            }
            style={{ cursor: "pointer" }}
            size={25}
          />
          <IconEye stroke={1} style={{ cursor: "pointer" }} size={25} />
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Layout title="Users">
      <Flex gap={20}>
        <StatsRing />
        <Stack flex={8} gap={30}>
          <Group>
            <InputWithButton defaultValue={search} onChange={(event) => setSearch(event.currentTarget.value)} w={400} />
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
          {users !== undefined && (
            <>
              <Table highlightOnHover striped>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Utilisateur</Table.Th>
                    <Table.Th>E-mail</Table.Th>
                    <Table.Th>Âge</Table.Th>
                    <Table.Th>Genre</Table.Th>
                    <Table.Th>Date de début d'abonnement</Table.Th>
                    <Table.Th>Date de fin d'abonnement</Table.Th>
                    <Table.Th></Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
              </Table>
              <Stack ml="auto" gap={4}>
                <Group>
                  <Pagination
                    total={pageCount}
                    value={page + 1}
                    onChange={(newPage: number) => router.push({ query: { page: newPage - 1 } })}
                    withEdges
                  />
                </Group>
                <Text ml={"auto"} fz={rem(15)} c={"gray.9"}>
                  Affichage de {from} à {to} sur {count} résultats
                </Text>
              </Stack>
            </>
          )}
        </Stack>
      </Flex>
    </Layout>
  );
};

export default UsersPage;

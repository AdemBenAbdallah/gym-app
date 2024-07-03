import Layout from "@/core/layouts/Layout";
import getUsersByAdmin from "@/features/users/queries/getUsersByAdmin";
import { GlobalModal } from "@/modals";
import { BlitzPage } from "@blitzjs/next";
import { usePaginatedQuery } from "@blitzjs/rpc";
import { Flex, Group, Stack, Table } from "@mantine/core";
import { openContextModal } from "@mantine/modals";
import { IconEdit, IconEye } from "@tabler/icons-react";
import { useRouter } from "next/router";

const ITEMS_PER_PAGE = 9;

const UsersPage: BlitzPage = () => {
  const router = useRouter();
  const page = Number(router.query.page) || 0;
  const [{ users, count, pageCount, from, to }] = usePaginatedQuery(getUsersByAdmin, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  });

  function range(start: number, end: number) {
    const length = end - start + 1;
    return Array.from({ length }, (_, index) => index + start);
  }

  const rows = users.map((user) => (
    <Table.Tr key={user.name}>
      <Table.Td>{user.name}</Table.Td>
      <Table.Td>{user.username || "-"}</Table.Td>
      <Table.Td>{user.email}</Table.Td>
      <Table.Td>{user.onboarded || "-"}</Table.Td>
      <Table.Td>--</Table.Td>
      <Table.Td>--</Table.Td>
      <Table.Td>
        <Group>
          <IconEdit
            onClick={() =>
              openContextModal({
                modal: GlobalModal.AddUserSubsctiption,
                title: "Become a pro member",
                innerProps: {
                  userId: user.id,
                },
              })
            }
            style={{ cursor: "pointer" }}
            size={25}
          />
          <IconEye style={{ cursor: "pointer" }} size={25} />
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Layout title="users">
      <Flex gap={20}>
        <Stack style={{ borderRadius: "12px" }} flex={2} mih={400} bg={"black"} c={"white"}></Stack>
        <Stack flex={8}>
          {users !== undefined && (
            <>
              <Table>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Name</Table.Th>
                    <Table.Th>Username</Table.Th>
                    <Table.Th>Email</Table.Th>
                    <Table.Th>Oboarded</Table.Th>
                    <Table.Th>Subscription Start</Table.Th>
                    <Table.Th>Subscription End</Table.Th>
                    <Table.Th></Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
              </Table>
              <Stack ml={"auto"}>
                <nav style={{ display: "flex" }}>
                  <button onClick={() => router.push({ query: { page: page - 1 } })} disabled={page == 0}>
                    <span>&lt; Previous</span>
                  </button>
                  {range(1, pageCount).map((pageNum: number, idx: number) => {
                    return (
                      <button
                        key={idx}
                        style={{ backgroundColor: idx === page ? "#0047AB" : "#808080", color: "#FFF" }}
                        onClick={() => {
                          router.push({ query: { page: pageNum - 1 } });
                        }}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                  <button onClick={() => router.push({ query: { page: page + 1 } })} disabled={page == pageCount - 1}>
                    <span>Next &gt;</span>
                  </button>
                </nav>
                <p>
                  <span>Showing </span>
                  <span>{from}</span>
                  <span> to </span>
                  <span>{to}</span>
                  <span> of </span>
                  <span>{count}</span>
                  <span> results</span>
                </p>
              </Stack>
            </>
          )}
        </Stack>
      </Flex>
    </Layout>
  );
};

export default UsersPage;

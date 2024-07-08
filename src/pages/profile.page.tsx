import { AuthenticationForm } from "@/core/components/MainAuthForm";
import { Horizontal, Vertical } from "@/core/components/MantineLayout";
import { useCurrentUser } from "@/features/users/hooks/useCurrentUser";
import { GlobalModal } from "@/modals";
import { ConfirmDelete } from "@/utils/mantine-utils";
import { BlitzPage, Routes } from "@blitzjs/next";
import { Button } from "@mantine/core";
import { openContextModal } from "@mantine/modals";
import Link from "next/link";
import Layout from "src/core/layouts/Layout";

const Profile: BlitzPage = () => {
  const currentUser = useCurrentUser();

  const deleteAccountMutation = () => {
    console.log("profile deleted");
  };
  return (
    <Layout title="Profile">
      {currentUser && (
        <>
          <Vertical align="center">
            <Horizontal>
              <Button
                onClick={() => {
                  ConfirmDelete(() => {
                    deleteAccountMutation();
                  });
                }}
                color="red"
                variant="filled"
              >
                Delete Profiel
              </Button>
              <Button
                onClick={() => {
                  openContextModal({
                    modal: GlobalModal.becomeBro,
                    title: "Become a pro",
                    innerProps: {
                      price: 48,
                    },
                  });
                }}
              >
                Become a pro modal
              </Button>
            </Horizontal>
          </Vertical>
          <Vertical align="center">
            <Link href={Routes.TodosPage()}>
              <Button>Go Ta Todo</Button>
            </Link>
          </Vertical>
        </>
      )}

      {!currentUser && (
        <Vertical fullH align="center" justify="center">
          <AuthenticationForm />
        </Vertical>
      )}
    </Layout>
  );
};

export default Profile;

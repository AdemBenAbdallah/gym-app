import Layout from "src/core/layouts/Layout";
import { BlitzPage } from "@blitzjs/next";
import UserInfo from "@/core/components/UserInfo";
import React from "react";
import { Horizontal, Vertical } from "@/core/components/MantineLayout";
import { AuthenticationForm } from "@/core/components/MainAuthForm";
import { useCurrentUser } from "@/features/users/hooks/useCurrentUser";
import { useMutation } from "@blitzjs/rpc";
import { Button } from "@mantine/core";
import testEmailSend from "@/features/users/mutations/testEmailSend";
import { openContextModal } from "@mantine/modals";
import { GlobalModal } from "@/modals";
import { ConfirmDelete } from "@/utils/mantine-utils";

const Home: BlitzPage = () => {
  const currentUser = useCurrentUser();
  const [$testEmailSend] = useMutation(testEmailSend);

  const deleteAccountMutation = () => {
    console.log("profile deleted");
  };
  return (
    <Layout title="Home">
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
                w={"fit-content"}
                color="red"
              >
                Delete Profiel
              </Button>
              <Button
                w={"fit-content"}
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
          {/* <Vertical align="center">
            <UserInfo />
            <Button
              onClick={async () => await $testEmailSend({})}
              w={"fit-content"}
            >
              send test email
            </Button>
          </Vertical> */}
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

export default Home;

import Layout from "@/core/layouts/Layout";
import { useCurrentUser } from "@/features/users/hooks/useCurrentUser";
import updateUser from "@/features/users/mutations/updateUser";
import getUserForProfile from "@/features/users/queries/getUserForProfile";
import { InputUpdateUserType } from "@/features/users/schemas";
import { useStringParam } from "@/utils/utils";
import { BlitzPage } from "@blitzjs/auth";
import { Routes } from "@blitzjs/next";
import { useMutation, useQuery } from "@blitzjs/rpc";
import { Button, Modal, Text, TextInput, rem } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { showNotification } from "@mantine/notifications";
import { useRouter } from "next/router";
import React from "react";

const ProfilePage: BlitzPage = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const currentUser = useCurrentUser();
  const username = useStringParam("username");
  const [user] = useQuery(getUserForProfile, { username });
  const [$updateUser, { isLoading }] = useMutation(updateUser, {});

  const router = useRouter();
  const form = useForm<InputUpdateUserType>({
    initialValues: {
      username: user?.username || "",
      name: user?.name || "",
      bio: user?.bio || "",
    },
  });

  const isOwner = currentUser?.id === user.id;
  return (
    <Layout>
      ProfilePage
      {isOwner && (
        <Button onClick={open} w={"fit-content"}>
          Edit Profile
        </Button>
      )}
      <Text>{user.username}</Text>
      <Text>{user.name}</Text>
      <Text>{user.bio}</Text>
      <Modal opened={opened} onClose={close} title="Authentication">
        <form
          onSubmit={form.onSubmit(async (values) => {
            await $updateUser(values);
            const { username } = values;
            if (user.username !== username) {
              if (!username) return;
              await router.push(Routes.ProfilePage({ username }));
            }
            showNotification({
              color: "green",
              title: "Updated",
              message: "profile info updated successfully",
            });
            close();
          })}
        >
          <TextInput
            label="Name"
            placeholder="name..."
            key={form.key("name")}
            {...form.getInputProps("name")}
          />
          <TextInput
            label="Username"
            placeholder="username..."
            key={form.key("username")}
            {...form.getInputProps("username")}
          />
          <TextInput
            label="Bio"
            placeholder="bio..."
            key={form.key("bio")}
            {...form.getInputProps("bio")}
          />
          <Button
            disabled={!form.isValid()}
            loading={isLoading}
            mt={rem(20)}
            type="submit"
          >
            update
          </Button>
        </form>
      </Modal>
    </Layout>
  );
};

export default ProfilePage;

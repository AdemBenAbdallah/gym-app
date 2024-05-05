import { Vertical } from "@/core/components/MantineLayout";
import Layout from "@/core/layouts/Layout";
import EditProfileForm from "@/features/users/form/EditProfileForm";
import updateUser from "@/features/users/mutations/updateUser";
import getUserForProfile from "@/features/users/queries/getUserForProfile";
import { InputUpdateUser, InputUpdateUserType } from "@/features/users/schemas";
import { BlitzPage, Routes } from "@blitzjs/next";
import { useMutation, useQuery } from "@blitzjs/rpc";
import { rem } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { useRouter } from "next/router";

const EditProfilePage: BlitzPage = () => {
  const [user] = useQuery(getUserForProfile, {});
  const [$updateUser, { isLoading }] = useMutation(updateUser, {});

  const router = useRouter();
  const form = useForm<InputUpdateUserType>({
    initialValues: {
      username: user?.username || "",
      name: user?.name || "",
      bio: user?.bio || "",
    },
    validate: zodResolver(InputUpdateUser),
    validateInputOnBlur: true,
  });

  const onSubmit = async (values: InputUpdateUserType) => {
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
  };

  return (
    <Layout>
      <Vertical maw={rem(500)}>
        <EditProfileForm
          form={form}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      </Vertical>
    </Layout>
  );
};

export default EditProfilePage;

import {
  ActionIcon,
  Button,
  FileInput,
  Image,
  Indicator,
  Loader,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { Form, UseFormReturnType } from "@mantine/form";
import React, { useState } from "react";
import { InputUpdateUserType } from "../schemas";
import { Horizontal, Vertical } from "@/core/components/MantineLayout";
import { IconPhoto, IconX } from "@tabler/icons-react";
import { useUploadThing } from "@/core/components/Uploadthing";
import { notifications } from "@mantine/notifications";
import { getUploadThingUrl } from "@/utils/image-utils";

type Props = {
  form: UseFormReturnType<InputUpdateUserType>;
  onSubmit: (values: InputUpdateUserType) => Promise<void>;
  isLoading: boolean;
};

const EditProfileForm = ({ form, onSubmit, isLoading }: Props) => {
  const [loading, setLoading] = useState(false);

  const { startUpload } = useUploadThing("imageUploader", {
    onClientUploadComplete: (res) => {
      setLoading(false);
      const fileKey = res?.[0]?.key;
      notifications.show({
        color: "green",
        title: "Succes",
        message: "File uploaded!",
      });
      form.setFieldValue("avatarImageKey", fileKey);
    },
    onUploadError: (error) => {
      setLoading(false);
      notifications.show({
        color: "red",
        title: "Error",
        message: error.message,
      });
    },
  });

  const existingAvatarImgKey = form.values.avatarImageKey;
  return (
    <Form form={form} onSubmit={onSubmit}>
      <Vertical gap={"md"}>
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
        {existingAvatarImgKey && (
          <Indicator
            w={"fit-content"}
            color="none"
            label={
              <Tooltip color="dark" label="Clear image">
                <ActionIcon
                  onClick={() => form.setFieldValue("avatarImageKey", "")}
                  size="xs"
                  variant="gradient"
                >
                  <IconX size={16} color="#fff" />
                </ActionIcon>
              </Tooltip>
            }
          >
            <Image
              w={60}
              src={getUploadThingUrl(existingAvatarImgKey)}
              alt="avatar"
            />
          </Indicator>
        )}
        {!existingAvatarImgKey && (
          <FileInput
            label={
              <Horizontal>
                <Text>Profile Picture</Text>
                {loading && <Loader size="xs" />}
              </Horizontal>
            }
            disabled={loading}
            clearable={true}
            w={"fit-content"}
            onChange={async (file) => {
              if (file) {
                setLoading(true);
                await startUpload([file]);
              }
            }}
            placeholder="Profile picture"
            leftSection={<IconPhoto size={16} />}
          />
        )}
        <Button disabled={!form.isValid()} loading={isLoading} type="submit">
          update
        </Button>
      </Vertical>
    </Form>
  );
};

export default EditProfileForm;

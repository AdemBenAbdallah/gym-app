import { Vertical } from "@/core/components/MantineLayout";
import UploadThingFileInput from "@/core/components/UploadThingFileInput";
import { Button, TextInput } from "@mantine/core";
import { Form, UseFormReturnType } from "@mantine/form";
import { InputUpdateUserType } from "../schemas";

type Props = {
  form: UseFormReturnType<InputUpdateUserType>;
  onSubmit: (values: InputUpdateUserType) => Promise<void>;
  isLoading: boolean;
};

const EditProfileForm = ({ form, onSubmit, isLoading }: Props) => {
  return (
    <Form form={form} onSubmit={onSubmit}>
      <Vertical gap={"md"}>
        <TextInput label="Name" placeholder="name..." key={form.key("name")} {...form.getInputProps("name")} />
        <TextInput
          label="Username"
          placeholder="username..."
          key={form.key("username")}
          {...form.getInputProps("username")}
        />
        <TextInput label="Bio" placeholder="bio..." key={form.key("bio")} {...form.getInputProps("bio")} />
        <UploadThingFileInput form={form} label="Profile Picture" name="avatarImageKey" />
        <UploadThingFileInput form={form} label="Cover Picture" name="coverImageKey" />
        <Button disabled={!form.isValid()} loading={isLoading} type="submit">
          update
        </Button>
      </Vertical>
    </Form>
  );
};

export default EditProfileForm;

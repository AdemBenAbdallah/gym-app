import { Group } from "@mantine/core";
import { GoogleButton } from "./Icons/GoogleButton";

const SocialButtonAuth = () => {
  return (
    <Group grow mb="md" mt="md">
      <GoogleButton radius="xl">Google</GoogleButton>
    </Group>
  );
};

export default SocialButtonAuth;

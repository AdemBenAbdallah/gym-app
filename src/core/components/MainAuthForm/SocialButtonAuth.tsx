import { Box, Group } from "@mantine/core";
import { GoogleButton } from "./Icons/GoogleButton";

const SocialButtonAuth = () => {
  return (
    <Group grow mb="md" mt="md">
      <Box component="a" href="/api/auth/google">
        <GoogleButton radius="xl">Google</GoogleButton>
      </Box>
    </Group>
  );
};

export default SocialButtonAuth;

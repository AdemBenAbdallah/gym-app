import { getGoogleOAuthURL } from "@/utils/getGoogleUrl";
import { Box, Group } from "@mantine/core";
import { GoogleButton } from "./Icons/GoogleButton";

const SocialButtonAuth = () => {
  return (
    <Group grow mb="md" mt="md">
      <Box component="a" href={getGoogleOAuthURL()}>
        <GoogleButton w={"100%"} radius="xl">
          Google
        </GoogleButton>
      </Box>
    </Group>
  );
};

export default SocialButtonAuth;

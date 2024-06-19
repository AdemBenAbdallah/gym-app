import { Group } from "@mantine/core";
import React from "react";
import { GoogleButton } from "./Icons/GoogleButton";
import { TwitterButton } from "./Icons/TwitterButton";

const SocialButtonAuth = () => {
  return (
    <Group grow mb="md" mt="md">
      <GoogleButton radius="xl">Google</GoogleButton>
      <TwitterButton radius="xl">Twitter</TwitterButton>
    </Group>
  );
};

export default SocialButtonAuth;

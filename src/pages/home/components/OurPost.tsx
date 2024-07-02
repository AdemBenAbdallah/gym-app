import { Vertical } from "@/core/components/MantineLayout";
import {
  Center,
  Container,
  Image,
  MantineTheme,
  SimpleGrid,
  Stack,
  Text,
  Title,
  px,
  rem,
  useMantineTheme,
} from "@mantine/core";
import React from "react";

// Access the theme inside the getChild function and type the parameters
const getChild = (height: number, theme: MantineTheme) => (
  <Image style={{ borderRadius: theme.radius.md }} src="/images/gym.jpeg" height={height} alt="image" />
);

const BASE_HEIGHT = 360;
const getSubHeight = (children: number, spacing: number) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children);

const OurPost: React.FC = () => {
  const theme = useMantineTheme();

  return (
    <React.Fragment>
      <Center mt={100}>
        <Vertical gap={0}>
          <Center>
            <Text>Instagram Feed</Text>
          </Center>
          <Center>
            <Title fz={rem(50)} style={{ textAlign: "center" }}>
              Our Instagram Post
            </Title>
          </Center>
        </Vertical>
      </Center>
      <Container my="md" mt={50}>
        <SimpleGrid cols={{ base: 1, xs: 4 }}>
          {getChild(BASE_HEIGHT, theme)}
          <Stack>
            {getChild(getSubHeight(2, px(theme.spacing.md) as number), theme)}
            {getChild(getSubHeight(2, px(theme.spacing.md) as number), theme)}
          </Stack>
          <Stack>
            {getChild(getSubHeight(3, px(theme.spacing.md) as number), theme)}
            {getChild(getSubHeight(3, px(theme.spacing.md) as number), theme)}
            {getChild(getSubHeight(3, px(theme.spacing.md) as number), theme)}
          </Stack>
          {getChild(BASE_HEIGHT, theme)}
        </SimpleGrid>
      </Container>
    </React.Fragment>
  );
};

export default OurPost;

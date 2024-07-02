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

const getChild = (height: number, theme: MantineTheme, index: number) => (
  <Stack style={{ borderRadius: theme.radius.md }} h={height} bg={"black"}>
    <Image style={{ borderRadius: theme.radius.md }} src={`/images/gym_${index}.jpeg`} h={height} alt="image" />
  </Stack>
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
            <Title fz={{ base: rem(35), md: rem(50) }} style={{ textAlign: "center" }}>
              Our Instagram Post
            </Title>
          </Center>
        </Vertical>
      </Center>
      <Container my="md" mt={50}>
        <SimpleGrid cols={{ base: 1, xs: 4 }}>
          {getChild(BASE_HEIGHT, theme, 2)}
          <Stack>
            {getChild(getSubHeight(2, px(theme.spacing.md) as number), theme, 2)}
            {getChild(getSubHeight(2, px(theme.spacing.md) as number), theme, 1)}
          </Stack>
          <Stack>
            {getChild(getSubHeight(3, px(theme.spacing.md) as number), theme, 1)}
            {getChild(getSubHeight(3, px(theme.spacing.md) as number), theme, 1)}
            {getChild(getSubHeight(3, px(theme.spacing.md) as number), theme, 1)}
          </Stack>
          {getChild(BASE_HEIGHT, theme, 1)}
        </SimpleGrid>
      </Container>
    </React.Fragment>
  );
};

export default OurPost;

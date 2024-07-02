import { Vertical } from "@/core/components/MantineLayout";
import {
  Center,
  Container,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  Title,
  px,
  rem,
  useMantineTheme,
} from "@mantine/core";
import React from "react";

const getChild = (height: number) => (
  <Skeleton height={height} radius="md" animate={false} />
);
const BASE_HEIGHT = 360;
const getSubHeight = (children: number, spacing: number) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children);

const OurPost = () => {
  const theme = useMantineTheme();
  return (
    <React.Fragment>
      <Center>
        <Vertical gap={0}>
          <Center>
            <Text> Instagram Feed</Text>
          </Center>
          <Center>
            <Title fz={rem(50)} style={{ textAlign: "center" }}>
              Our Instagram Post
            </Title>
          </Center>
        </Vertical>
      </Center>
      <Container my="md">
        <SimpleGrid cols={{ base: 1, xs: 4 }}>
          {getChild(BASE_HEIGHT)}
          <Stack>
            {getChild(getSubHeight(2, px(theme.spacing.md) as number))}
            {getChild(getSubHeight(2, px(theme.spacing.md) as number))}
          </Stack>
          <Stack>
            {getChild(getSubHeight(3, px(theme.spacing.md) as number))}
            {getChild(getSubHeight(3, px(theme.spacing.md) as number))}
            {getChild(getSubHeight(3, px(theme.spacing.md) as number))}
          </Stack>
          {getChild(BASE_HEIGHT)}
        </SimpleGrid>
      </Container>
    </React.Fragment>
  );
};

export default OurPost;

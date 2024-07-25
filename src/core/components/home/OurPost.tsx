import { Vertical } from "@/core/components/MantineLayout";
import { Center, Image, MantineTheme, SimpleGrid, Stack, Text, Title, px, rem, useMantineTheme } from "@mantine/core";
import NextImage from "next/image";
import React from "react";

interface ImageStackProps {
  height: number;
  theme: MantineTheme;
  index: number;
}

const ImageStack: React.FC<ImageStackProps> = ({ height, theme, index }) => (
  <Stack style={{ borderRadius: theme.radius.md }} h={height} bg={"black"}>
    <Image
      fit="cover"
      style={{ borderRadius: theme.radius.md }}
      src={"/images/gym_" + index + ".webp"}
      mih={height}
      component={NextImage}
      width={100}
      height={100}
      alt="image"
    />
  </Stack>
);

const BASE_HEIGHT = 560;
const getSubHeight = (children: number, spacing: number) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children);

const OurPost: React.FC = () => {
  const theme = useMantineTheme();

  return (
    <div className="autoShow">
      <Center mt={{ base: 100, md: 150 }}>
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
      <Stack px={100} mt={50}>
        <SimpleGrid cols={{ base: 1, xs: 4 }}>
          <ImageStack height={BASE_HEIGHT} theme={theme} index={2} />
          <Stack>
            <ImageStack height={getSubHeight(2, px(theme.spacing.md) as number)} theme={theme} index={6} />
            <ImageStack height={getSubHeight(2, px(theme.spacing.md) as number)} theme={theme} index={4} />
          </Stack>
          <Stack>
            <ImageStack height={getSubHeight(3, px(theme.spacing.md) as number)} theme={theme} index={3} />
            <ImageStack height={getSubHeight(3, px(theme.spacing.md) as number)} theme={theme} index={5} />
            <ImageStack height={getSubHeight(3, px(theme.spacing.md) as number)} theme={theme} index={1} />
          </Stack>
          <ImageStack height={BASE_HEIGHT} theme={theme} index={7} />
        </SimpleGrid>
      </Stack>
    </div>
  );
};

export default OurPost;

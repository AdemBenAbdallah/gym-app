import { Vertical } from "@/core/components/MantineLayout";
import HomeLayout from "@/core/layouts/HomeLayout";
import { BlitzPage } from "@blitzjs/next";
import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  Group,
  SimpleGrid,
  Skeleton,
  Text,
  Title,
  rem,
} from "@mantine/core";
import { FeaturesCards } from "./components/FeaturesCard";
import { FooterLinks } from "./components/FooterLinks";
import Start from "./components/Start";

const PRIMARY_COL_HEIGHT = rem(600);
const Home: BlitzPage = () => {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <HomeLayout title="Home">
      <Start />
      <Group bg={"lime"} w={"100%"} h={80} mb={80}></Group>

      <Center>
        <Vertical>
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
      <Container my="md" mb={80}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
          <Grid gutter="md">
            <Grid.Col>
              <Skeleton
                height={SECONDARY_COL_HEIGHT}
                radius="md"
                animate={false}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Skeleton
                height={SECONDARY_COL_HEIGHT}
                radius="md"
                animate={false}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Skeleton
                height={SECONDARY_COL_HEIGHT}
                radius="md"
                animate={false}
              />
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Container>

      <FeaturesCards />

      <Center mb={70}>
        <Center
          w={"90%"}
          bg={"lime"}
          mt={rem(120)}
          c={"white"}
          px={{ base: rem(20), sm: 0 }}
          style={{ borderRadius: 48 }}
        >
          <Box>
            <Title
              fw={800}
              fz={{ base: rem(32), sm: rem(57) }}
              mt={{ base: rem(50), sm: rem(100) }}
            >
              GET STARTED FOR FREE
            </Title>
            <p className="text">
              Join the talents in our community. Have doubts?{" "}
              <Text span fw={600}>
                Read 270+ reviews here.
              </Text>
            </p>
            <Button
              bg={"white"}
              c={"black"}
              mx={"auto"}
              fw={600}
              radius={"md"}
              mb={rem(70)}
              mt={{ base: rem(12), sm: rem(58) }}
              w={{ base: "100%", sm: rem(326) }}
              h={{ base: rem(50), sm: rem(40) }}
              style={{ display: "block" }}
            >
              Join our Talent community
            </Button>
          </Box>
        </Center>
      </Center>

      <FooterLinks />
    </HomeLayout>
  );
};

export default Home;

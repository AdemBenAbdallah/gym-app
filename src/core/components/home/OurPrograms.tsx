import { Vertical } from "@/core/components/MantineLayout";
import {
  Avatar,
  Button,
  Container,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
  rem,
  useMantineTheme,
} from "@mantine/core";
import React from "react";

const PRIMARY_COL_HEIGHT = rem(600);
const OurPrograms = () => {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
  return (
    <React.Fragment>
      <Container my="md" mb={80}>
        <Vertical gap={50}>
          <Vertical gap={0}>
            <Text> Programs</Text>
            <Title fz={{ base: rem(35), md: rem(50) }}>Our programs</Title>
            <Text fz={{ base: rem(13), md: rem(14) }}>
              Gaine up your routine our growing libray of workouts led <br /> by our world-class Trainers
            </Text>
          </Vertical>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
            <Stack
              bg={"lime.6"}
              h={PRIMARY_COL_HEIGHT}
              style={{ borderRadius: theme.radius.md }}
              px={"lg"}
              py={"xl"}
              gap={50}
            >
              <Group>
                <Avatar
                  size={50}
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                  alt="Jacob Warnhalter"
                  radius="xl"
                />
                <div>
                  <Text fw={600} fz="md">
                    Jacob Warnhalter
                  </Text>
                  <Text fz="sm" c="gray.8">
                    10 minutes ago
                  </Text>
                </div>
              </Group>
              <Stack gap={80}>
                <Title order={1} fz={{ base: rem(60), md: rem(80) }} lh={1}>
                  Training Experience
                </Title>
                <Button ml={"auto"} bg={"black"} c={"white"} size="lg" radius={"sm"}>
                  Learn more
                </Button>
              </Stack>
            </Stack>

            <Grid gutter="md">
              <Grid.Col>
                <Stack h={SECONDARY_COL_HEIGHT} style={{ borderRadius: theme.radius.md }} bg={"black"} c={"white"}>
                  <Image
                    w={"100%"}
                    h={"60%"}
                    style={{ borderRadius: theme.radius.md }}
                    src={"http://trainwithlcpt.com/wp-content/uploads/2019/07/service4.jpg"}
                  />
                  <Stack gap={5} p={10}>
                    <Title order={3}>Strength Training</Title>
                    <Text lineClamp={2} fz={rem(14)}>
                      This program is designed for those who exercises only for their body fitness not body building.
                    </Text>
                  </Stack>
                </Stack>
              </Grid.Col>
              <Grid.Col span={6}>
                <Stack h={SECONDARY_COL_HEIGHT} style={{ borderRadius: theme.radius.md }} bg={"black"}>
                  <Image
                    w={"100%"}
                    h={"100%"}
                    style={{ borderRadius: theme.radius.md }}
                    src="http://trainwithlcpt.com/wp-content/uploads/2019/05/hipcravo-1370862-unsplash.jpg"
                  />
                </Stack>
              </Grid.Col>
              <Grid.Col span={6}>
                <Stack h={SECONDARY_COL_HEIGHT} style={{ borderRadius: theme.radius.md }} bg={"black"}>
                  <Image
                    w={"100%"}
                    h={"100%"}
                    style={{ borderRadius: theme.radius.md }}
                    src={"http://trainwithlcpt.com/wp-content/uploads/2019/05/hipcravo-1370862-unsplash.jpg"}
                  />
                </Stack>
              </Grid.Col>
            </Grid>
          </SimpleGrid>
        </Vertical>
      </Container>
    </React.Fragment>
  );
};

export default OurPrograms;

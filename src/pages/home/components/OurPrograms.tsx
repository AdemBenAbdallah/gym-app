import { Vertical } from "@/core/components/MantineLayout";
import {
  Avatar,
  Button,
  Container,
  Grid,
  Group,
  SimpleGrid,
  Skeleton,
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
            <Title fz={rem(50)}>Our programs</Title>
            <Text>
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
                <Title order={1} fz={80} lh={1}>
                  Training Experience
                </Title>
                <Button ml={"auto"} bg={"black"} c={"white"} size="lg" radius={"sm"}>
                  Learn more
                </Button>
              </Stack>
            </Stack>

            <Grid gutter="md">
              <Grid.Col>
                <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
              </Grid.Col>
              <Grid.Col span={6}>
                <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
              </Grid.Col>
              <Grid.Col span={6}>
                <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
              </Grid.Col>
            </Grid>
          </SimpleGrid>
        </Vertical>
      </Container>
    </React.Fragment>
  );
};

export default OurPrograms;

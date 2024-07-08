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
            <Text> Programmes</Text>
            <Title fz={{ base: rem(35), md: rem(50) }}>Nos programmes</Title>
            <Text fz={{ base: rem(13), md: rem(14) }}>
              Améliorez votre routine avec notre bibliothèque croissante d'entraînements dirigés <br /> par nos
              entraîneurs de classe mondiale
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
                    Il y a 10 minutes
                  </Text>
                </div>
              </Group>
              <Stack gap={80}>
                <Title order={1} fz={{ base: rem(40), md: rem(60) }} lh={1}>
                  Expérience enrichissante d'entraînement{" "}
                </Title>
                <Button ml={"auto"} bg={"black"} c={"white"} size="lg" radius={"sm"}>
                  En savoir plus
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
                  <Stack gap={5} p={12}>
                    <Title order={3}>Entraînement de force</Title>
                    <Text lineClamp={2} fz={rem(14)}>
                      Ce programme est conçu pour ceux qui font de l'exercice uniquement pour la forme physique et non
                      pour la musculation.
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
                    src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

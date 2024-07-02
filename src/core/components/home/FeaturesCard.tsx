import { Vertical } from "@/core/components/MantineLayout";
import classes from "@/styles/module/FeaturesCards.module.css";
import { Card, Container, SimpleGrid, Text, Title, rem, useMantineTheme } from "@mantine/core";
import { IconCookie, IconGauge, IconUser } from "@tabler/icons-react";

const mockdata = [
  {
    title: "Performance extrême",
    description:
      "Cette poussière est en réalité un poison puissant qui rendra même un catcheur professionnel malade. Regice se couvre d'air glacial à -200 degrés Celsius.",
    icon: IconGauge,
  },
  {
    title: "Axé sur la confidentialité",
    description:
      "On dit qu'il peut courir à la même vitesse que la foudre. Son corps glacé est tellement froid qu'il ne fondra pas même s'il est immergé dans le magma.",
    icon: IconUser,
  },
  {
    title: "Pas de tierces parties",
    description:
      "Ils sont populaires mais rares. Les entraîneurs qui les exhibent imprudemment peuvent être ciblés par des voleurs.",
    icon: IconCookie,
  },
];

export function FeaturesCards() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon style={{ width: rem(50), height: rem(50) }} stroke={2} color={theme.colors.lime[6]} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>

      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" mt={100}>
      <Vertical gap={0}>
        <Text> Services</Text>
        <Title fz={{ base: rem(35), md: rem(50) }}>Our Services</Title>
      </Vertical>
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={{ base: 10, md: 50 }}>
        {features}
      </SimpleGrid>
    </Container>
  );
}

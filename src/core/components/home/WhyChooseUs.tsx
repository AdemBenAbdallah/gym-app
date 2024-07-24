import { Box, CheckIcon, ColorSwatch, Flex, Grid, Group, Stack, Text, Title, rem } from "@mantine/core";
import CountUp from "react-countup";

const WhyChooseUs = () => {
  const reasons = [
    "1 programme gratuit pour les nouveaux",
    "Installations à la pointe de la technologie",
    "Entraînez-vous plus intelligemment",
    "Plans d'entraînement personnalisés",
    "Plus de 25+ coachs experts",
    "Communauté solidaire",
    "Partenaires fiables",
    "Horaires flexibles",
  ];

  return (
    <Stack bg={"gray.2"} mt={{ base: 100, md: 200 }}>
      <Group>
        <Stack pl={100}>
          <Flex align="flex-start" gap="xl" direction={{ base: "column", md: "row" }}>
            <Stack flex={1} gap="xl">
              <Stack gap={5}>
                <Stack gap={0}>
                  <Text c="custom" fw={600}>
                    À propos
                  </Text>
                  <Title order={1} fz={{ base: rem(35), md: rem(40) }}>
                    Pourquoi nous choisir
                  </Title>
                </Stack>
                <Text c={"gray"} maw={500}>
                  Choisissez votre classe préférée et commencez maintenant. Rappelez-vous, le seul mauvais entraînement
                  est celui que vous n'avez pas fait.
                </Text>
              </Stack>
            </Stack>
          </Flex>
          <Stack gap="sm">
            {reasons.map((reason, index) => (
              <Group key={index} gap="lg" align="center">
                <ColorSwatch component="button" color="var(--mantine-color-custom-6)" style={{ color: "#fff" }}>
                  <CheckIcon style={{ width: rem(12), height: rem(12) }} />
                </ColorSwatch>
                <Text fz={{ base: rem(15), md: rem(17) }} fw={600}>
                  {reason}
                </Text>
              </Group>
            ))}
          </Stack>
        </Stack>
        <Grid gutter={0} flex={1} bg={"custom"} w={"100%"} c={"white"}>
          {Whydata.map((item, idx) => (
            <Grid.Col
              key={idx}
              p={{ base: rem(29), sm: rem(64) }}
              style={{ borderLeft: "1px solid #F1F4F0", borderBottom: "1px solid #F1F4F0" }}
              span={{ base: 6 }}
            >
              <Box bg={"custom"} c={"black.9"} mih={200}>
                {idx < 5 ? (
                  <CountUp
                    className="counter-on-scroll"
                    style={{ fontSize: rem(70), fontWeight: 700, lineHeight: 1.2 }}
                    end={item.value}
                    enableScrollSpy
                  />
                ) : null}
                <Text fw={300} fz={rem(20)}>
                  {item.subtitle}
                </Text>
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </Group>
    </Stack>
  );
};

const Whydata = [
  {
    value: 120,
    subtitle: "Projects delivered and counting. Let's make yours next!",
  },
  {
    value: 120,
    subtitle: "Active projects underway. Ready to add yours to the list!",
  },
  {
    value: 120,
    subtitle: "Verified talents, screened and ready to tackle your project.",
  },
  {
    value: 120,
    subtitle: "Tests completed, ensuring top-notch quality for your project.",
  },
  {
    value: 120,
    subtitle: "Satisfied clients and counting. Let's make you the next one!",
  },
  {
    value: 120,
    subtitle: "",
  },
];
export default WhyChooseUs;

import { Box, Button, Divider, Flex, Image, Stack, Text, rem } from "@mantine/core";

const Section2 = () => {
  return (
    <Stack mt={{ base: 100, md: 200 }} align="center" style={{ overflowX: "hidden" }}>
      <Flex wrap={"wrap"} gap={{ base: 0, md: 200 }} justify="center">
        <Box className="slideShowRight" w={{ base: "90%", md: 450 }} pos={"relative"}>
          <Image w={"100%"} src="/images/program_3.jpeg" alt="homme gym" />
          <Box
            pos={"absolute"}
            bottom={0}
            right={{ base: 0, md: -55 }}
            fw={700}
            maw={250}
            fz={rem(35)}
            lh={rem(38)}
            c={"white"}
            bg={"custom"}
            p={"xl"}
          >
            Choisissez votre plan et entraîneur
          </Box>
        </Box>
        <Stack className="slideShowLeft" maw={500} gap={80} p={{ base: 50, md: 0 }}>
          <Stack>
            <Text fz={rem(14)} lh={rem(15)} tt={"uppercase"} span>
              POURQUOI NOUS CHOISIR
            </Text>
            <Text fw={700} fz={{ base: rem(27), md: rem(57) }} lh={{ base: rem(30), md: rem(57) }} maw={1000}>
              Notre complexe a les meilleurs entraîneurs
            </Text>
            <Text fz={rem(17)} lh={rem(27)} c={"gray.7"}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque.
            </Text>
          </Stack>

          <Stack>
            <Text fz={rem(24)} lh={rem(24)} fw={700}>
              <Text fz={rem(24)} c={"gray.5"} mr={rem(15)} span>
                01.
              </Text>
              Entraînement personnel
            </Text>
            <Divider />
            <Text fz={rem(24)} lh={rem(24)} fw={700}>
              <Text fz={rem(24)} c={"gray.5"} mr={rem(15)} span>
                02.
              </Text>
              Entraînement en groupe
            </Text>
          </Stack>

          <Button radius={0} size="lg" bg={"yellow.7"}>
            Commencez maintenant
          </Button>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Section2;

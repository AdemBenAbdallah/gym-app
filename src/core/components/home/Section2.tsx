import { Box, Button, Divider, Group, Image, Stack, Text, rem } from "@mantine/core";

const Section2 = () => {
  return (
    <Stack mt={200} align="center">
      <Group gap={200}>
        <Box className="slideShowRight" w={450} pos={"relative"}>
          <Image w={"100%"} src="/images/program_3.jpeg" alt="man gym " />
          <Box
            pos={"absolute"}
            bottom={0}
            right={-55}
            fw={700}
            maw={250}
            fz={rem(35)}
            lh={rem(38)}
            c={"white"}
            bg={"custom"}
            p={"xl"}
          >
            Choose your plan and trainer
          </Box>
        </Box>
        <Stack className="slideShowLeft" maw={500} gap={80}>
          <Stack>
            <Text fz={rem(14)} lh={rem(15)} tt={"uppercase"} span>
              WHY CHOOSE US{" "}
            </Text>
            <Text fw={700} fz={rem(57)} lh={rem(57)} maw={1000}>
              Our complex has the best trainers
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
              Personal training
            </Text>
            <Divider />
            <Text fz={rem(24)} lh={rem(24)} fw={700}>
              <Text fz={rem(24)} c={"gray.5"} mr={rem(15)} span>
                02.
              </Text>
              Group training
            </Text>
          </Stack>

          <Button radius={0} size="lg" bg={"yellow.7"}>
            Get Started
          </Button>
        </Stack>
      </Group>
    </Stack>
  );
};

export default Section2;

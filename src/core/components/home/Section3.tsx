import { Box, Button, Group, Image, Stack, Text, rem, useMantineTheme } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

const Section3 = () => {
  const theme = useMantineTheme();

  return (
    <Stack mt={200}>
      <Group>
        <Box pos={"relative"} flex={1}>
          <Box pos={"absolute"} bottom={-100} right={-100}>
            <Group w={900} h={400} gap={20} justify="end">
              <Image className="autoShow" w={350} src="/images/program_1.jpg" alt="man gym " />
              <Image className="autoShow" w={350} src="/images/program_2.jpg" alt="man gym " />
            </Group>
          </Box>
        </Box>
        <Stack flex={1} bg={"gray.1"} gap={50} px={200} py={150}>
          <Stack maw={500}>
            <Text fz={rem(14)} lh={rem(15)} tt={"uppercase"} span>
              MORE THAN TRAINING
            </Text>
            <Text fw={700} fz={rem(57)} lh={rem(57)}>
              Compete in our sporting events{" "}
            </Text>
            <Text fz={rem(17)} lh={rem(27)} c={"gray.7"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore.
            </Text>
          </Stack>

          <Stack gap={0}>
            <Text fz={rem(17)} lh={rem(27)}>
              <Text fz={rem(17)} mr={rem(15)} span>
                <IconCheck color={theme.colors.yellow[7]} />
              </Text>
              Adipiscing eli sed eiusmod
            </Text>
            <Text fz={rem(17)} lh={rem(27)}>
              <Text fz={rem(17)} mr={rem(15)} span>
                <IconCheck color={theme.colors.yellow[7]} />
              </Text>
              Group training
            </Text>
            <Text fz={rem(17)} lh={rem(27)}>
              <Text fz={rem(17)} mr={rem(15)} span>
                <IconCheck color={theme.colors.yellow[7]} />
              </Text>
              Labore et dolore magna
            </Text>
          </Stack>

          <Button radius={0} size="lg">
            About Us
          </Button>
        </Stack>
      </Group>
    </Stack>
  );
};

export default Section3;

import { BackgroundImage, Box, Center, SimpleGrid, Stack, Text, rem } from "@mantine/core";

const Section1 = () => {
  return (
    <Stack bg={"bray.1"}>
      <Center className="autoShow" style={{ textAlign: "center" }}>
        <Stack>
          <Text fz={rem(14)} lh={rem(15)} tt={"uppercase"} span>
            WHAT WE DO
          </Text>
          <Text fw={700} fz={rem(57)} lh={rem(57)} maw={1000}>
            Regardless of your sport of choice, our esteemed sports complex cultivates champions
          </Text>
        </Stack>
      </Center>

      <Center className="autoShow">
        <SimpleGrid w={"70%"} cols={{ base: 1, md: 4 }} mt={{ base: 10, md: 50 }}>
          {data.map((item, index) => (
            <Box maw={300} key={index}>
              <BackgroundImage src={"/images/services_" + `${index + 1}` + ".jpg"} radius="sm">
                <Text p={"md"} c="white" fz={rem(30)}>
                  0{index + 1}.
                </Text>
                <Stack gap={0} p={"md"}>
                  <Text fw={700} fz={rem(20)} c="white" mt={300}>
                    {item.title}
                  </Text>
                  <Text c={"white"} span>
                    {item.subtitle}
                  </Text>
                </Stack>
              </BackgroundImage>
            </Box>
          ))}
        </SimpleGrid>
      </Center>
    </Stack>
  );
};

const data = [
  {
    title: "BodyBuilding",
    subtitle: "Sport",
  },
  {
    title: "Workout",
    subtitle: "Sport",
  },
  {
    title: "Crossfit",
    subtitle: "Sport",
  },
  {
    title: "Fitness",
    subtitle: "Sport",
  },
];
export default Section1;

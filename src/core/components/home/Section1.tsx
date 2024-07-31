import { BackgroundImage, Box, Center, SimpleGrid, Stack, Text, rem } from "@mantine/core";

const Section1 = () => {
  return (
    <Stack bg={"bray.1"}>
      <Center className="autoShow" style={{ textAlign: "center" }}>
        <Stack>
          <Text fz={rem(14)} lh={rem(15)} tt={"uppercase"} span>
            CE QUE NOUS FAISONS
          </Text>
          <Text
            fw={700}
            fz={{ base: rem(27), md: rem(57) }}
            lh={{ base: rem(30), md: rem(57) }}
            maw={{ base: 500, md: 1000 }}
          >
            Quel que soit votre sport de prédilection, notre complexe sportif renommé cultive des champions
          </Text>
        </Stack>
      </Center>

      <Center className="autoShow2">
        <SimpleGrid w={{ base: "90%", md: "70%" }} cols={{ base: 2, md: 4 }} mt={{ base: 0, md: 50 }}>
          {data.map((item, index) => (
            <Box maw={{ base: "100%", md: 300 }} key={index}>
              <BackgroundImage
                src={"/images/services_" + `${index + 1}` + ".jpg"}
                radius="sm"
                mah={{ base: 250, md: "100%" }}
              >
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

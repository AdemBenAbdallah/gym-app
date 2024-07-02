import { Horizontal, Vertical } from "@/core/components/MantineLayout";
import {
  CheckIcon,
  ColorSwatch,
  Container,
  Image,
  Text,
  Title,
  rem,
} from "@mantine/core";

const WhyChooseUs = () => {
  const reasons = [
    "1 Free program for new member",
    "Train smarter and faster than before",
    "Over 150+ expert coach",
    "Reliable partners",
    "State-of-the-art facilities",
    "Personalized workout plans",
    "Supportive community",
    "Flexible schedules",
  ];

  return (
    <Container size="lg" py="xl">
      <Horizontal align="flex-start" gap="xl">
        <Image
          flex={1}
          radius={12}
          src="http://trainwithlcpt.com/wp-content/uploads/2019/05/alexander-redl-185764-unsplashb.jpg"
          alt="Why Choose Us"
          w={300}
          h={600}
        />
        <Vertical flex={1} gap="xl">
          <Vertical gap={5}>
            <Vertical gap={0}>
              <Text c="lime.6" fw={600}>
                About
              </Text>
              <Title order={1} fz={60}>
                Why choose us
              </Title>
            </Vertical>
            <Text c={"gray"}>
              Choose your favourite class and start now. Remember, the only bad
              workout is the one you didn't do.
            </Text>
          </Vertical>
          <Vertical gap="sm">
            {reasons.map((reason, index) => (
              <Horizontal key={index} gap="sm" align="center">
                <ColorSwatch
                  component="button"
                  color="var(--mantine-color-lime-6)"
                  style={{ color: "#fff" }}
                >
                  <CheckIcon style={{ width: rem(12), height: rem(12) }} />
                </ColorSwatch>
                <Text fz={20} fw={600}>
                  {reason}
                </Text>
              </Horizontal>
            ))}
          </Vertical>
        </Vertical>
      </Horizontal>
    </Container>
  );
};

export default WhyChooseUs;

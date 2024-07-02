import { Box, Button, Center, Text, Title, rem } from "@mantine/core";

const JoinUs = () => {
  return (
    <Center mb={70}>
      <Center
        w={"90%"}
        bg={"lime"}
        mt={rem(120)}
        c={"white"}
        px={{ base: rem(20), sm: 0 }}
        style={{ borderRadius: 48 }}
      >
        <Box>
          <Title
            fw={800}
            fz={{ base: rem(32), sm: rem(57) }}
            mt={{ base: rem(50), sm: rem(100) }}
          >
            GET STARTED FOR FREE
          </Title>
          <p className="text">
            Join the talents in our community. Have doubts?{" "}
            <Text span fw={600}>
              Read 270+ reviews here.
            </Text>
          </p>
          <Button
            bg={"white"}
            c={"black"}
            mx={"auto"}
            fw={600}
            radius={"md"}
            mb={rem(70)}
            mt={{ base: rem(12), sm: rem(58) }}
            w={{ base: "100%", sm: rem(326) }}
            h={{ base: rem(50), sm: rem(40) }}
            style={{ display: "block" }}
          >
            Join our Talent community
          </Button>
        </Box>
      </Center>
    </Center>
  );
};

export default JoinUs;

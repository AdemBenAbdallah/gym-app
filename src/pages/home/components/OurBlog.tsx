import { BadgeCard } from "@/core/components/BadgeCard";
import { Vertical } from "@/core/components/MantineLayout";
import { Container, SimpleGrid, Text, Title, rem } from "@mantine/core";

const OurBlog = () => {
  return (
    <Container size="lg" mt={100}>
      <Vertical gap={0}>
        <Text> Blog</Text>
        <Title fz={rem(50)}>Articale from tasking</Title>
      </Vertical>
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {Array(3)
          .fill(null)
          .map((_, idx) => (
            <BadgeCard key={idx} />
          ))}
      </SimpleGrid>
    </Container>
  );
};

export default OurBlog;

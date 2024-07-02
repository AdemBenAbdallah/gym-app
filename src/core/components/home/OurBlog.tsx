import { BadgeCard } from "@/core/components/BadgeCard";
import { Vertical } from "@/core/components/MantineLayout";
import { Container, SimpleGrid, Text, Title, rem } from "@mantine/core";

const blogs = [
  {
    image:
      "https://i0.wp.com/post.healthline.com/wp-content/uploads/2023/02/female-dumbbells-1296x728-header-1296x729.jpg?w=1155&h=2268",
    title: "5 Essential Strength Training Exercises",
    category: "Strength Training",
    description:
      "Discover the top 5 strength training exercises that will help you build muscle, increase strength, and improve your overall fitness. From squats to deadlifts, learn how to execute each move with perfect form.",
  },
  {
    image: "https://emilypost.com/client_media/images/blogs/everyday-gym.jpg",
    title: "The Ultimate Guide to Cardio Workouts",
    category: "Cardio",
    description:
      "Cardio workouts are essential for heart health and weight management. This guide provides a variety of cardio exercises, from high-intensity interval training (HIIT) to steady-state cardio, suitable for all fitness levels.",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUnBpyk60ttCH8C9OTkcHvHI5ZG7bXZ927A&s",
    title: "Yoga for Flexibility, Strength, and Relaxation",
    category: "Yoga",
    description:
      "Enhance your flexibility and find inner peace with these yoga poses designed for all levels. Whether you're a beginner or an advanced practitioner, these exercises will help you achieve a more balanced body and mind.",
  },
];

const OurBlog = () => {
  return (
    <Container size="lg" mt={100}>
      <Vertical gap={0}>
        <Text> Blog</Text>
        <Title fz={{ base: rem(35), md: rem(50) }}>Articale from tasking</Title>
      </Vertical>
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={{ base: 30, md: 50 }}>
        {blogs.map((blog, idx) => (
          <BadgeCard key={idx} blog={blog} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default OurBlog;

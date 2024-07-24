import {
  FeaturesCards,
  FooterLinks,
  HeroSection,
  InfinityHScroll,
  JoinUs,
  OurBlog,
  OurPost,
  WhyChooseUs,
} from "@/core/components/home";
import Section1 from "@/core/components/home/Section1";
import HomeLayout from "@/core/layouts/HomeLayout";
import { BlitzPage } from "@blitzjs/next";

const Home: BlitzPage = () => {
  return (
    <HomeLayout title="Home">
      <HeroSection />
      <InfinityHScroll />
      <Section1 />
      <WhyChooseUs />
      <OurPost />
      <FeaturesCards />
      <OurBlog />
      <JoinUs />
      <FooterLinks />
    </HomeLayout>
  );
};

export default Home;

import {
  FooterLinks,
  HeroSection,
  InfinityHScroll,
  JoinUs,
  OurBlog,
  Section3,
  WhyChooseUs,
} from "@/core/components/home";
import Section1 from "@/core/components/home/Section1";
import Section2 from "@/core/components/home/Section2";
import HomeLayout from "@/core/layouts/HomeLayout";
import { BlitzPage } from "@blitzjs/next";

const Home: BlitzPage = () => {
  return (
    <HomeLayout title="Home">
      <HeroSection />
      <InfinityHScroll />
      <Section1 />
      <Section2 />
      <WhyChooseUs />
      <Section3 />
      <OurBlog />
      <JoinUs />
      <FooterLinks />
    </HomeLayout>
  );
};

export default Home;

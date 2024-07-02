import HomeLayout from "@/core/layouts/HomeLayout";
import { BlitzPage } from "@blitzjs/next";
import { FeaturesCards } from "./components/FeaturesCard";
import { FooterLinks } from "./components/FooterLinks";
import HeroSection from "./components/HeroSection";
import InfinityHScroll from "./components/InfinityHScroll";
import JoinUs from "./components/JoinUs";
import OurBlog from "./components/OurBlog";
import OurPost from "./components/OurPost";
import OurPrograms from "./components/OurPrograms";
import WhyChooseUs from "./components/WhyChooseUs";

const Home: BlitzPage = () => {
  return (
    <HomeLayout title="Home">
      <HeroSection />
      <InfinityHScroll />
      <OurPrograms />
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

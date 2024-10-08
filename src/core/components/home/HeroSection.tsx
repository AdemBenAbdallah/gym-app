import { Routes } from "@blitzjs/next";
import { Button, Center, Group } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect } from "react";

const HeroSection = () => {
  return (
    <div className="home-page">
      <div className="video-container">
        <video autoPlay loop muted className="video">
          <source
            src={"https://res.cloudinary.com/dfc7p5apq/video/upload/v1720351402/nc7jejirxkqazliva2fn.mp4"}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        <div className="content">
          {/* <h1>TRAVAILLEZ AVEC DES PROFESSIONNELS</h1>
          <h2>
            Nous sommes le plus grand réseau d'experts en fitness, santé et bien-être en Tunisie. Prêts à vous aider à
            atteindre vos objectifs de fitness et à transformer votre vie.
          </h2> */}
          <FadeUpStagger />
          <Center>
            <Group>
              <Button fw={400} radius={"md"} component={Link} href={Routes.ContactPage()}>
                COMMENCER
              </Button>
              <Button
                component={Link}
                href={Routes.BlogPage()}
                fw={400}
                bg={"white"}
                c={"black"}
                rightSection={<IconArrowUpRight width={20} />}
              >
                SAVOIR PLUS
              </Button>
            </Group>
          </Center>
        </div>
      </div>
    </div>
  );
};

export function FadeUpStagger() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up-stagger > div");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("show");
      }, index * 150);
    });
  }, []);

  return (
    <div className="fade-up-stagger">
      <div className="hidden">
        <span className="title">TRAVAILLEZ </span>
      </div>
      <div className="hidden">
        <span className="title">AVEC DES </span>
      </div>
      <div className="hidden">
        <span className="title">PROFESSIONNELS</span>
      </div>
      <div style={{ margin: "20px 0" }} className="hidden">
        <span className="subtitle">
          {" "}
          Nous sommes le plus grand réseau d'experts en fitness, santé et bien-être en Tunisie.
        </span>
        <br />
        <span className="subtitle">
          Prêts à vous aider à atteindre vos objectifs de fitness et à transformer votre vie.
        </span>
      </div>
    </div>
  );
}
export default HeroSection;

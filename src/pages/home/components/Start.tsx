import { Button, Center, Group } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";

const Start = () => {
  return (
    <div className="home-page">
      <div className="video-container">
        {/* <Image src={HomeImage} w={200} /> */}
        <video autoPlay loop muted className="video">
          <source
            src={
              "https://res.cloudinary.com/dmedknyzv/video/upload/v1718033606/intro_qu0rit.mp4"
            }
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        <div className="content">
          <h1>TRAVAILLEZ AVEC DES PROFESSIONNELS</h1>
          <h2>
            Nous sommes le plus grand réseau d'experts en fitness, santé et
            bien-être en Tunisie. Prêts à vous aider à atteindre vos objectifs
            de fitness et à transformer votre vie.
          </h2>

          <Center>
            <Group>
              <Button bg={"lime-sorbet"} radius={"md"}>
                START NOW
              </Button>
              <Button rightSection={<IconArrowUpRight width={20} />}>
                LEARN MORE
              </Button>
            </Group>
          </Center>
        </div>
      </div>
    </div>
  );
};

export default Start;

import { useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Section,
} from "react-bulma-components";
import bulmaCarousel from "bulma-carousel/dist/js/bulma-carousel.min.js";
import "bulma-carousel/src/sass/index.sass";
import { VideoCard } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

export const Productions = () => {
  useEffect(() => {
    const options = {
      slidesToShow: 3,
      breakpoints: [
        { changePoint: 480, slidesToShow: 1, slidesToScroll: 1 },
        { changePoint: 640, slidesToShow: 2, slidesToScroll: 2 },
        { changePoint: 768, slidesToShow: 3, slidesToScroll: 3 },
      ],
    };
    bulmaCarousel.attach("#video-slider", options);
  }, []);

  return (
    <Section>
      <Container>
        <Heading
          id="sobre-nos"
          size={3}
          className="section__title"
          textAlign={"center"}
        >
          Publicações
        </Heading>
        <p className="paragraph">
          Confira a seguir os nossos vídeos e postagens mais recentes:
        </p>
        <div id="video-slider" className="carousel">
          <div className="item-1">
            <VideoCard
              title="Abandono e como denunciar"
              description="No vídeo de hoje, abordaremos sobre o tema abandono e como as denúncias podem ser feitas."
              youtubeVideoId="ktDgZIdq4W0"
              instagramPostId="CX1x2i0hGMP"
            />
          </div>
          <div className="item-2">
            <VideoCard
              title="Maus-tratos e como denunciar"
              description="Neste video aprenderemos quais ações são maus-tratos e como denunciá-los."
              youtubeVideoId="-KHiU1T0L4g"
              instagramPostId="CXtxzAdjH3v"
            />
          </div>
          <div className="item-3">
            <VideoCard
              title="Leis de Proteção aos Animais"
              description="No vídeo de hoje, abordaremos sobre as principais Leis Federais que asseguram proteção aos animais contra maus-tratos e como e onde as denúncias podem serem feitas."
              youtubeVideoId="FRUewFvDmbc"
              instagramPostId="CXeUtTsJhJ4"
            />
          </div>
          <div className="item-4">
            <VideoCard
              title="O que é senciência?"
              description="No vídeo de hoje falaremos um pouco sobre o conceito senciência."
              youtubeVideoId="oU0I89OeyCE"
              instagramPostId="CU7aoVWjkjd"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "50px 0",
          }}
        >
          <Button
            renderAs="a"
            color="success"
            href="https://www.youtube.com/channel/UCdWCY0EY9WwrQI5DB-GxYpQ/videos"
            target="_blank"
            rel="noopener"
          >
            <FontAwesomeIcon
              icon={faExternalLink}
              style={{ marginRight: "10px" }}
            />
            Ver mais vídeos
          </Button>
        </div>
      </Container>
    </Section>
  );
};

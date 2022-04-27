import { Card, Media, Heading, Content } from "react-bulma-components";
import { YoutubeEmbed } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";

type VideoCardProps = {
  title: string;
  description: string;
  youtubeVideoId: string;
  instagramPostId: string;
};

export const VideoCard = ({
  title,
  description,
  youtubeVideoId,
  instagramPostId,
}: VideoCardProps) => {
  return (
    <Card
      data-aos="flip-left"
      data-aos-duration="1500"
      style={{ width: 300, margin: "auto" }}
    >
      <YoutubeEmbed embedId={youtubeVideoId} />
      <Card.Content>
        <Media>
          <Media.Item>
            <Heading id="publicacoes" size={4}>
              {title}
            </Heading>
          </Media.Item>
        </Media>
        {/* <Media>
          <Media.Item>
            <time>04/02/2022</time>
          </Media.Item>
        </Media> */}
        <Content>{description}</Content>
      </Card.Content>
      <Card.Footer>
        <Card.Footer.Item
          renderAs="a"
          href={`https://www.youtube.com/watch?v=${youtubeVideoId}`}
          target="_blank"
          rel="noopener"
        >
          <FontAwesomeIcon style={{ color: "#000" }} icon={faYoutube} />
          <p className="ml-3">Youtube</p>
        </Card.Footer.Item>
        <Card.Footer.Item
          renderAs="a"
          href={`https://www.instagram.com/p/${instagramPostId}`}
          target="_blank"
          rel="noopener"
        >
          <FontAwesomeIcon style={{ color: "#000" }} icon={faInstagram} />
          <p className="ml-3">Instagram</p>
        </Card.Footer.Item>
      </Card.Footer>
    </Card>
  );
};

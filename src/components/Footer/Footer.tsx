import {
  Hero,
  Footer as BulmaFooter,
  Container,
  Columns,
  Image,
} from "react-bulma-components";
import Styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import {
  fa500px,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div>
      <Hero>
        <Hero.Header renderAs="header" />
        <Hero.Body />
        <Hero.Footer>
          <BulmaFooter className={Styles.footer}>
            <Container>
              <Columns centered>
                <Columns.Column offset={2} size={2}>
                  <Image src="assets/uenf-transparente.png" />
                </Columns.Column>
                <Columns.Column size={4} style={{ color: "#f3f3f4" }}>
                  <FontAwesomeIcon icon={faLocationPin} />
                  <p>
                    Av. Alberto Lamego, 2000 - Parque Califórnia Campos dos
                    Goytacazes - RJ. CEP: 28013-602
                  </p>
                </Columns.Column>
                <Columns.Column className={Styles.container} size={3}>
                  <a
                    className={Styles.link}
                    href="https://www.youtube.com/channel/UCdWCY0EY9WwrQI5DB-GxYpQ"
                    target="_blank"
                    rel="noopener"
                  >
                    <FontAwesomeIcon
                      className={Styles.icon}
                      icon={faYoutube}
                      size={"2x"}
                    />
                  </a>
                  <a
                    className={Styles.link}
                    href="https://www.instagram.com/projeto.bemestaranimal/"
                    target="_blank"
                    rel="noopener"
                  >
                    <FontAwesomeIcon
                      className={Styles.icon}
                      icon={faInstagram}
                      size={"2x"}
                    />
                  </a>
                </Columns.Column>
              </Columns>
            </Container>
          </BulmaFooter>
        </Hero.Footer>
      </Hero>
    </div>
  );
};

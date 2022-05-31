import {
  Hero,
  Footer as BulmaFooter,
  Container,
  Columns,
  Image,
} from "react-bulma-components";
import * as Styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationPin,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

type FooterProps = {
  totalCount: number;
};

export const Footer = ({ totalCount }: FooterProps) => {
  return (
    <div>
      <Hero>
        <Hero.Header renderAs="header" />
        <Hero.Body />
        <Hero.Footer>
          <BulmaFooter className={Styles.footer}>
            <Container>
              <Columns centered>
                <Columns.Column className={Styles.image} offset={1} size={2}>
                  <Image src="images/uenf-transparente.png" />
                </Columns.Column>
                <Columns.Column size={2} style={{ color: "#f3f3f4" }}>
                  <div className={Styles.counter}>
                    <FontAwesomeIcon icon={faChartSimple} size={"lg"} />
                    <h3>Contador de visitas: </h3>
                    <h2>{totalCount}</h2>
                  </div>
                </Columns.Column>
                <Columns.Column size={3} style={{ color: "#f3f3f4" }}>
                  <div className={Styles.location}>
                    <FontAwesomeIcon icon={faLocationPin} size={"lg"} />
                    <p>
                      Av. Alberto Lamego, 2000 - Parque Califórnia Campos dos
                      Goytacazes - RJ. CEP: 28013-602
                    </p>
                  </div>
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

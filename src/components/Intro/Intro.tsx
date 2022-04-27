import { Container, Heading, Hero } from "react-bulma-components";
import Styles from "./Intro.module.scss";

export const Intro = () => {
  return (
    <Hero size="fullheight">
      <Hero.Body className={Styles.hero_bg}>
        <Container>
          <Heading
            className={Styles.title}
            size={1}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Educação Humanitária
            <br />e Bem Estar Animal
          </Heading>
          <Heading
            className={Styles.subtitle}
            size={3}
            subtitle
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Educar para proteger
          </Heading>
        </Container>
      </Hero.Body>
    </Hero>
  );
};

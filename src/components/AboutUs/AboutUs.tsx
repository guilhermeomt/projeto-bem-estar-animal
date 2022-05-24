import {
  Columns,
  Container,
  Heading,
  Section,
  Image,
} from "react-bulma-components";
import * as Styles from "./AboutUs.module.scss";

export const AboutUs = () => {
  return (
    <Section>
      <Container>
        <Heading
          id="sobre-nos"
          size={3}
          className="section__title"
          textAlign={"center"}
        >
          Sobre Nós
        </Heading>
        <Columns mt={4} centered>
          <Columns.Column size={7}>
            <p
              className="paragraph"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              A educação humanitária estimula atitudes positivas em relação aos
              animais despertando a compaixão e respeito também pelas pessoas e
              meio-ambiente. Trabalhar com os temas sobre bem-estar animal e
              guarda responsável podem promover à comunidade transformações de
              comportamentos sociais. O ambiente universitário, mais
              propriamente o hospital veterinário permite através da extensão
              universitária a interação com a comunidade local, permitindo
              conhecer os principais problemas voltados à questão do bem-estar
              animal e guarda responsável.
            </p>
          </Columns.Column>
          <Columns.Column size={5}>
            <Image
              className={Styles.about__image}
              src="https://images.unsplash.com/photo-1532598735201-8932203d3004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          </Columns.Column>
        </Columns>
        <Columns mt={4}>
          <Columns.Column size={5}>
            <Image
              className={Styles.about__image}
              src="https://images.unsplash.com/photo-1545529468-42764ef8c85f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
              data-aos="fade-right"
              data-aos-duration="1500"
            />
          </Columns.Column>
          <Columns.Column size={7}>
            <p
              className="paragraph"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              Dentro deste contexto, o projeto teve início no ano de 2019 com o
              objetivo de buscar possíveis soluções para contribuir de forma
              efetiva com as questões abordadas. No entanto, no ano de 2020
              devido à crise COVID 19 houve a necessidade de focar em atividades
              remotas para dar continuidade ao projeto até que no futuro
              possamos realizar também as atividades presenciais.
            </p>
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  );
};

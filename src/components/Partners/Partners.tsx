import {
  Columns,
  Container,
  Heading,
  Section,
  Image,
} from "react-bulma-components";

export const Partners = () => {
  return (
    <Section>
      <Container>
        <Heading
          id="apoio"
          size={3}
          className="section__title"
          textAlign={"center"}
        >
          Apoio e Parceiros
        </Heading>
      </Container>
      <Columns mt={5} centered vCentered>
        <Columns.Column size={2}>
          <a href="https://uenf.br" target="_blank" rel="noopener">
            <Image src="/images/uenf.png" />
          </a>
        </Columns.Column>
        <Columns.Column offset={1} size={1}>
          <a href="https://uenf.br/extensao/" target="_blank" rel="noopener">
            <Image src="/images/proex.png" />
          </a>
        </Columns.Column>
        <Columns.Column offset={1} size={1}>
          <a href="https://cczcampos.com.br/" target="_blank" rel="noopener">
            <Image src="/images/ccz.png" />
          </a>
        </Columns.Column>
        <Columns.Column offset={1} size={1}>
          <a
            href="https://pt-br.facebook.com/8bpmoficial/"
            target="_blank"
            rel="noopener"
          >
            <Image src="/images/pmerj.png" />
          </a>
        </Columns.Column>
      </Columns>
    </Section>
  );
};

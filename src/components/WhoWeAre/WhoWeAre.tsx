import { MemberProfile } from "../MemberProfile";
import {
  Columns,
  Container,
  Heading,
  Section,
  Image,
} from "react-bulma-components";

export const WhoWeAre = () => {
  return (
    <Section>
      <Container>
        <Heading
          id="quem-somos"
          size={3}
          className="section__title"
          textAlign={"center"}
        >
          Quem Somos
        </Heading>
        <Columns>
          <MemberProfile
            name="Prof. Dra. Rosemary Bastos"
            subtitle="Coordenadora do projeto Educação Humanitária e Bem Estar Animal"
            description="Professora de Fisiologia e bem-estar animal. Coordenadora do projeto
            Laboratório de Reprodução e Melhoramento Genético Animal (LRMGA).
            Centro de Ciências e Tecnologias Agropecuárias (CCTA)."
            image="src"
            lattesUrl="https://lattes.cnpq.br/8170878800181801"
          />
        </Columns>
      </Container>
    </Section>
  );
};

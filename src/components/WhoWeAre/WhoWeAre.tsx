import { MemberProfile } from "../MemberProfile";
import { Columns, Container, Heading, Section } from "react-bulma-components";

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
        <Columns alignItems="center">
          <MemberProfile
            name="Prof. Dra. Rosemary Bastos"
            subtitle="Coordenadora do projeto Educação Humanitária e Bem Estar Animal"
            description="Professora de Fisiologia e bem-estar animal. Coordenadora do projeto
            Laboratório de Reprodução e Melhoramento Genético Animal (LRMGA).
            Centro de Ciências e Tecnologias Agropecuárias (CCTA)."
            image="/images/foto-professora-rosemary.jpeg"
            lattesUrl="http://lattes.cnpq.br/0194173115576666"
          />
          <MemberProfile
            name="Júlia D'Angelo do Nascimento"
            subtitle="Discente do Curso de Medicina Veterinária"
            description="Bolsista de extensão."
            image="/images/foto-julia.jpeg"
            lattesUrl="http://lattes.cnpq.br/0049542584695726"
          />
          <MemberProfile
            name="Jéssica Dorneles Torres"
            subtitle="Discente do Curso de Medicina Veterinária"
            description="Bolsista de extensão."
            image="/images/foto-jessica.jpeg"
            lattesUrl="http://lattes.cnpq.br/5418112476841930"
          />
          <MemberProfile
            name="Gustavo Silva de Souza"
            subtitle="Discente do Curso de Medicina Veterinária"
            description="Voluntário."
            image="/images/foto-gustavo.jpeg"
            lattesUrl="http://lattes.cnpq.br/5187827638371783"
          />
          <MemberProfile
            name="Stella Gioia Branco"
            subtitle="Médica veterinária"
            description="Bolsista Universidade aberta."
            image="/images/foto-stella.jpeg"
            lattesUrl="http://lattes.cnpq.br/0719918108072687"
          />
          <MemberProfile
            name="Guilherme Oliveira Mussa Tavares"
            subtitle="Discente do Curso de Ciência da Computação"
            description="Idealizador e programador do website."
            image="/images/foto-guilherme.jpg"
            lattesUrl="http://lattes.cnpq.br/0071235060835264"
          />
        </Columns>
      </Container>
    </Section>
  );
};

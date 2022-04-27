import { Columns, Heading, Image } from "react-bulma-components";
import Styles from "./MemberProfile.module.scss";

type MemberProfileProps = {
  name: string;
  subtitle: string;
  description: string;
  image: string;
  lattesUrl?: string;
};

export const MemberProfile = ({
  name,
  subtitle,
  description,
  image,
  lattesUrl,
}: MemberProfileProps) => {
  return (
    <>
      <Columns.Column mt={3} size={2} offset={1} data-aos="zoom-in">
        <Image
          src="https://bulma.io/images/placeholders/128x128.png"
          size={"1by1"}
          alt="Placeholder"
          rounded
        />
      </Columns.Column>
      <Columns.Column size={9} mt={4} data-aos="zoom-in">
        <Heading size={4}>
          <strong>{name}</strong>
        </Heading>
        <Heading className={Styles.subtitle} subtitle size={6}>
          {subtitle}
        </Heading>
        <p>{description}</p>

        <a href="/">
          <p>Clique aqui para ver o currículo Lattes</p>
        </a>
      </Columns.Column>
    </>
  );
};

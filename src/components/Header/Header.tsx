import { Navbar, Image } from "react-bulma-components";
import Styles from "./Header.module.scss";

export const Header = () => {
  return (
    <Navbar className={Styles.navbar} transparent px={6} py={2}>
      <Navbar.Menu>
        <Navbar.Brand>
          <Navbar.Container>
            <a href="/">
              <Image
                size={128}
                src="/assets/logo.png"
                alt="Projeto Bem Estar Animal"
              />
            </a>
          </Navbar.Container>
          <Navbar.Burger />
        </Navbar.Brand>
      </Navbar.Menu>
      <Navbar.Menu>
        <Navbar.Container className={Styles.navbar_end} align="right">
          <Navbar.Item className={Styles.navbar_item} href="#sobre-nos">
            Sobre Nós
          </Navbar.Item>
          <Navbar.Item className={Styles.navbar_item} href="#publicacoes">
            Publicações
          </Navbar.Item>
          <Navbar.Item className={Styles.navbar_item} href="#quem-somos">
            Quem Somos
          </Navbar.Item>
          <Navbar.Item className={Styles.navbar_item} href="#apoio">
            Apoio e Parceiros
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
};

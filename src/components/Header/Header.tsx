import { Navbar, Image } from "react-bulma-components";
import * as Styles from "./Header.module.scss";

export const Header = () => {
  function handleToggleMenu() {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach((el) => {
        const menu = el.dataset.target;
        const $menu = document.getElementById(menu);

        el.classList.toggle("is-active");
        $menu?.classList.toggle("is-active");
      });
    }
  }

  return (
    <>
      <Navbar className={Styles.navbar} transparent px={6} py={2}>
        <Navbar.Brand alignItems="center">
          <Navbar.Container>
            <a href="/">
              <Image
                size={128}
                src="/images/logo.png"
                alt="Projeto Bem Estar Animal"
              />
            </a>
          </Navbar.Container>
          <Navbar.Burger
            onClick={handleToggleMenu}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          />
        </Navbar.Brand>
        <Navbar.Menu id="navbarBasicExample">
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
            <Navbar.Item className={Styles.navbar_item}>Contato</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    </>
  );
};

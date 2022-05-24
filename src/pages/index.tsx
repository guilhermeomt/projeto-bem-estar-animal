import { useEffect } from "react";
import {
  Header,
  Intro,
  AboutUs,
  Productions,
  WhoWeAre,
  Partners,
  Footer,
} from "../components";
import { Helmet } from "react-helmet";
import "aos/dist/aos.css";
import "../styles/global.scss";

function App() {
  useEffect(() => {
    const AOS = require("aos");
    AOS.init();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Projeto Educação Humanitária e Bem Estar Animal - Educar para proteger
        </title>
        <meta
          name="description"
          content="A educação humanitária estimula atitudes positivas em relação aos animais despertando a compaixão e respeito também pelas pessoas e meio-ambiente. Trabalhar com os temas sobre bem-estar animal e guarda responsável podem promover à comunidade transformações de comportamentos sociais."
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Header />
      <Intro />
      <AboutUs />
      <Productions />
      <WhoWeAre />
      <Partners />
      <Footer />
    </>
  );
}

export default App;

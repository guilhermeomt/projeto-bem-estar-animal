import { useEffect } from "react";
import {
  Intro,
  AboutUs,
  Productions,
  WhoWeAre,
  Partners,
  Layout,
} from "../components";
import "aos/dist/aos.css";
import "../styles/global.scss";

function App() {
  useEffect(() => {
    const AOS = require("aos");
    AOS.init();
  }, []);

  return (
    <Layout>
      <Intro />
      <AboutUs />
      <Productions />
      <WhoWeAre />
      <Partners />
    </Layout>
  );
}

export default App;

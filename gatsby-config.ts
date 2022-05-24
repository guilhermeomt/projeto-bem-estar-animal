import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title:
      "Projeto Educação Humanitária e Bem Estar Animal - Educar para proteger",
    titleTemplate: "%s · Projeto Educação Humanitária e Bem Estar Animal",
    description:
      "A educação humanitária estimula atitudes positivas em relação aos animais despertando a compaixão e respeito também pelas pessoas e meio-ambiente. Trabalhar com os temas sobre bem-estar animal e guarda responsável podem promover à comunidade transformações de comportamentos sociais.",
    url: "https://bemestaranimal.uenf.br/",
    image: "images/logo250px.png",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-root-import",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `React`,
        allExtensions: true,
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

export default config;

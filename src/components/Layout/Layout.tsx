import { Footer } from "../Footer";
import { Header } from "../Header";
import { SEO } from "../SEO";

type LayoutProps = {
  children: React.ReactNode | React.ReactNode[];
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <SEO />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

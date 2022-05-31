import { Footer } from "../Footer";
import { Header } from "../Header";
import { SEO } from "../SEO";

type LayoutProps = {
  totalCount: number;
  children: React.ReactNode | React.ReactNode[];
};

export const Layout = ({ totalCount, children }: LayoutProps) => {
  return (
    <>
      <SEO />
      <Header />
      <main>{children}</main>
      <Footer totalCount={totalCount} />
    </>
  );
};

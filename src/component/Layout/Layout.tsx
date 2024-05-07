import { ReactNode } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

type Props = {
  children?: ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

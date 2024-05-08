import { ReactNode } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

type Props = {
  children?: ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

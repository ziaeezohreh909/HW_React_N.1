import { ReactNode } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

type Props = {
  children?: ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center gap-4">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}

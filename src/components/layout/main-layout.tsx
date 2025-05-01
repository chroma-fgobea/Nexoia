import { ReactNode } from "react";
import MainNav from "./main-nav";
import Footer from "./footer";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
import type { ReactNode } from "react";
import FooterComponent from "../components/footerComponent";
import HeaderComponent from "../components/headerComponent";


interface LayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <HeaderComponent />
      <main className="content">{children}</main>
      <FooterComponent />
    </div>
  );
};

export default MainLayout;

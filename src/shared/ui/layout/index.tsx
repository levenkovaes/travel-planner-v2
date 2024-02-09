import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

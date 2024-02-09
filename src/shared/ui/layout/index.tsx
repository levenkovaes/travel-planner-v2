import { Outlet } from "react-router-dom";

import Footer from "./footer";
import Header from "./header";

const Layout: React.FC = () => {
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

export default Layout;

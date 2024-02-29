import { Outlet } from "react-router-dom";

import Footer from "./footer";
import Header from "./header";
import Main from "./main";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Layout;

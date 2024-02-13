import { Route, Routes } from "react-router-dom";

import Layout from "../shared/ui/layout";
import Home from "./home/ui";
import Menu from "./menu/ui";

const Pages = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="/" element={<Layout />}>
      <Route path="menu" element={<Menu />} />
    </Route>
  </Routes>
);

export default Pages;

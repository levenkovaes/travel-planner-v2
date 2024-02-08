import { Route, Routes } from "react-router-dom";

import { Layout } from "../shared/ui/layout";
import { Home } from "./home";

export const Pages = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
  </Routes>
);

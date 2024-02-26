import { Route, Routes } from "react-router-dom";

import Layout from "../shared/ui/layout";
import Home from "./home/ui";
import Menu from "./menu/ui";
import NoPage from "./no-page/ui";
import PackingChecklistInitialPage from "./packing-checklist-initial-page/ui";
import PackingChecklistCreation from "./packing-checklist-creation/ui";
import PackingChecklist from "./packing-checklist/ui";

const Pages = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="/" element={<Layout />}>
      <Route path="menu" element={<Menu />} />
      <Route
        path="packing-checklist"
        element={<PackingChecklistInitialPage />}
      />
      <Route
        path="create-packing-checklist"
        element={<PackingChecklistCreation />}
      />
      <Route path="checklists/:checklistId" element={<PackingChecklist />} />

      <Route path="*" element={<NoPage />} />
    </Route>
  </Routes>
);

export default Pages;

import { Route, Routes } from "react-router-dom";

import Layout from "../shared/ui/layout";
import Home from "./home/ui";
import Menu from "./menu/ui";
import NoPage from "./no-page/ui";
import PackingChecklistCreation from "./packing-checklist-creation/ui";
import PackingChecklistInitialPage from "./packing-checklist-initial-page/ui";
import PackingChecklist from "./packing-checklist/ui";
import PreviousPackingChecklists from "./previous-packing-checklists/ui";
import ToDoList from "./to-do-list/ui";
import { Planner } from "./planner/ui";

const Pages = () => (
  <Routes>
    <Route index element={<Home />} />

    <Route path="/">
      <Route path="planner" element={<Planner />} />
    </Route>

    <Route path="/" element={<Layout />}>
      <Route path="menu" element={<Menu />} />

      <Route path="to-do-list" element={<ToDoList />} />
      <Route
        path="packing-checklist"
        element={<PackingChecklistInitialPage />}
      />
      <Route
        path="create-packing-checklist"
        element={<PackingChecklistCreation />}
      />
      <Route
        path="packing-checklists/:checklistId"
        element={<PackingChecklist />}
      />
      <Route
        path="packing-checklists"
        element={<PreviousPackingChecklists />}
      />

      <Route path="*" element={<NoPage />} />
    </Route>
  </Routes>
);

export default Pages;

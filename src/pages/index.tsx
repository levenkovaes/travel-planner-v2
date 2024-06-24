import { Route, Routes } from "react-router-dom";

import Layout from "../shared/ui/layout";
import Home from "./home/ui";
import Menu from "./menu/ui";
import NoPage from "./no-page/ui";
import PackingChecklistCreation from "./packing-checklist-creation/ui";
import PackingChecklist from "./packing-checklist/ui";
import Planner from "./planner/ui";
import PreviousPackingChecklists from "./previous-packing-checklists/ui";
import ToDoLists from "./previous-to-do-lists";
import ToDoList from "./to-do-list/ui";

const Pages = () => (
  <Routes>
    <Route index element={<Home />} />

    <Route path="/"></Route>

    <Route path="/" element={<Layout />}>
      <Route path="menu" element={<Menu />} />

      {/* TODO */}
      {/* <Route path="planners" element={<Planners />} /> */}
      <Route path="planner/:plannerId" element={<Planner />} />
      <Route path="to-do-lists" element={<ToDoLists />} />
      <Route path="to-do-list/:listId" element={<ToDoList />} />
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

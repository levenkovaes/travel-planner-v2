import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "../shared/ui/layout";

const Home = lazy(() => import("./home/ui"));
const Menu = lazy(() => import("./menu/ui"));
const NoPage = lazy(() => import("./no-page/ui"));
const PackingChecklistCreation = lazy(
  () => import("./packing-checklist-creation/ui")
);
const PackingChecklist = lazy(() => import("./packing-checklist/ui"));
const Planner = lazy(() => import("./planner/ui"));
const Planners = lazy(() => import("./planners/ui"));
const PreviousPackingChecklists = lazy(
  () => import("./previous-packing-checklists/ui")
);
const ToDoLists = lazy(() => import("./previous-to-do-lists"));
const ToDoList = lazy(() => import("./to-do-list/ui"));

const Pages: React.FC = () => (
  <Routes>
    <Route index element={<Home />} />

    <Route path="/"></Route>

    <Route path="/" element={<Layout />}>
      <Route path="menu" element={<Menu />} />

      <Route path="planners" element={<Planners />} />
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

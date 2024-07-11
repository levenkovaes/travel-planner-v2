import React from "react";

import { CenteredHeading1 } from "../../../shared/ui/typography";
import MenuGrid from "../../../widgets/menu-grid/ui";

const Menu: React.FC = () => {
  return (
    <>
      <CenteredHeading1>MENU</CenteredHeading1>
      <MenuGrid />
    </>
  );
};

export default Menu;

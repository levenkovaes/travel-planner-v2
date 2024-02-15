import React from "react";

import { MenuContainer, MenuHeading } from "./styled";
import MenuGrid from "../../../widgets/menu-grid/ui";

const Menu = () => {
  return (
    <MenuContainer>
      <MenuHeading>Menu</MenuHeading>
      <MenuGrid />
    </MenuContainer>
  );
};

export default Menu;

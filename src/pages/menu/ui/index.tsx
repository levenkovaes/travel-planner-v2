import React from "react";

import { Grid } from "../../../shared/ui/grid";
import MenuCard from "../../../widgets/menu-card/ui";
import { MenuContainer, MenuHeading } from "./styled";

const Menu = () => {
  return (
    <MenuContainer>
      <MenuHeading>Menu</MenuHeading>
      <Grid>
        <MenuCard></MenuCard>
        <MenuCard></MenuCard>
        <MenuCard></MenuCard>
        <MenuCard></MenuCard>
      </Grid>
    </MenuContainer>
  );
};

export default Menu;

import React from "react";

import { MenuContainer } from "./styled";
import { Heading1 } from "../../../shared/ui/typography";
import { Grid } from "../../../shared/ui/grid";
import MenuCard from "../../../widgets/menu-card/ui";

const Menu = () => {
  return (
    <MenuContainer>
      <Heading1>Menu</Heading1>
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

import React from "react";

import { Grid } from "../../../shared/ui/grid";
import MenuCard from "../menu-card/ui";
import { MENU_CARD_CONTENT } from "../constants";
import { nanoid } from "@reduxjs/toolkit";

const MenuGrid = () => {
  return (
    <Grid>
      {MENU_CARD_CONTENT.map(({ title, description, link }) => (
        <MenuCard
          title={title}
          description={description}
          link={link}
          key={nanoid()}
        />
      ))}
    </Grid>
  );
};

export default MenuGrid;

import React from "react";

import { nanoid } from "@reduxjs/toolkit";

import { MENU_CARD_CONTENT } from "../constants";
import MenuCard from "../menu-card/ui";
import { MenuGridContainer, SMenuGrid } from "./styled";

const MenuGrid: React.FC = () => {
  return (
    <MenuGridContainer>
      <SMenuGrid>
        {MENU_CARD_CONTENT.map(
          ({ title, description, addLink, previousLink }) => (
            <MenuCard
              title={title}
              description={description}
              addLink={addLink}
              previousLink={previousLink}
              key={nanoid()}
            />
          )
        )}
      </SMenuGrid>
    </MenuGridContainer>
  );
};

export default MenuGrid;

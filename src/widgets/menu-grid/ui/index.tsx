import React from "react";
import styled from "styled-components";

import { nanoid } from "@reduxjs/toolkit";

import { Grid } from "../../../shared/ui/grid";
import { MENU_CARD_CONTENT } from "../constants";
import MenuCard from "../menu-card/ui";

const MenuGrid = () => {
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

const MenuGridContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SMenuGrid = styled(Grid)`
  flex-grow: 1;
  grid-template-columns: 1fr;
  margin: 0;
`;

export default MenuGrid;

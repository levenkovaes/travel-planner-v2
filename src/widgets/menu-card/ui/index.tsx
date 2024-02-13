import React from "react";

import { Heading2, SmallerParagraph } from "../../../shared/ui/typography";
import { CardButton, CardContainer } from "./styled";

const MenuCard = () => {
  return (
    <CardContainer>
      <Heading2>MenuCard</Heading2>
      <SmallerParagraph>
        Text text text text text text text text text
      </SmallerParagraph>
      <CardButton>&gt;</CardButton>
    </CardContainer>
  );
};

export default MenuCard;

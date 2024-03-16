import React, { useState } from "react";

import { TransparentLongButton } from "../../../shared/ui/button";
import CenteringDiv from "../../../shared/ui/centering-div";
import Footer from "../../../shared/ui/layout/footer";
import Header from "../../../shared/ui/layout/header";
import { Heading1 } from "../../../shared/ui/typography";
import { PlannerItemAdditionForm } from "../../../widgets/planner-item-addition-form/ui";
import {
  AddButton,
  ButtonContainer,
  PlannerContainer,
  PlannerMain,
  TimelineContainer,
} from "./styled";

export const Planner = () => {
  const [isAdding, setIsAdding] = useState(false);

  const toggleAddItemWidget = () => {
    setIsAdding((prev) => !prev);
  };

  const closeAddItemWidget = () => {
    setIsAdding(false);
  };

  return (
    <>
      <Header />
      <PlannerMain>
        <PlannerContainer>
          <Heading1>Planner</Heading1>
          <TimelineContainer>
            <AddButton onClick={toggleAddItemWidget}>+</AddButton>
          </TimelineContainer>

          {isAdding && (
            <PlannerItemAdditionForm handleClose={closeAddItemWidget} />
          )}
          <ButtonContainer>
            <TransparentLongButton isDelete>Clear</TransparentLongButton>
          </ButtonContainer>
        </PlannerContainer>
      </PlannerMain>
      <Footer />
    </>
  );
};

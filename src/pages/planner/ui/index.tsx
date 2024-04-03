import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";

import { TransparentLongButton } from "../../../shared/ui/button";
import { Heading1 } from "../../../shared/ui/typography";
import PlannerItem from "../../../widgets/planner-item";
import PlannerItemAdditionForm from "../../../widgets/planner-item-addition-form/ui";
import { clearPlanner, selectPlanner } from "./plannerSlice/plannerSlice";
import {
  AddButton,
  AddItemContainer,
  ButtonContainer,
  PlannerContainer,
  PlannerContent,
  TimelineContainer,
} from "./styled";
import { useDispatch } from "react-redux";

const Planner = () => {
  const dispatch = useDispatch();
  const planner = useSelector(selectPlanner);
  const [isAdding, setIsAdding] = useState(false);

  const toggleAddItemWidget = () => {
    setIsAdding((prev) => !prev);
  };

  const closeAddItemWidget = () => {
    setIsAdding(false);
  };

  const plannerItems = useMemo(() => {
    return planner.map(({ date, place, activities, id }, index) => (
      <PlannerItem
        date={date}
        place={place}
        activities={activities}
        count={index + 1}
        key={id}
      />
    ));
  }, [planner]);

  const handleClearPlanner = () => {
    dispatch(clearPlanner());
  };

  console.log(planner);

  return (
    <PlannerContainer>
      <Heading1>Planner</Heading1>
      <PlannerContent>
        <TimelineContainer>{plannerItems}</TimelineContainer>
        <AddItemContainer isAdding={isAdding}>
          <AddButton onClick={toggleAddItemWidget}>+</AddButton>
          {isAdding && (
            <PlannerItemAdditionForm handleClose={closeAddItemWidget} />
          )}
        </AddItemContainer>
      </PlannerContent>
      <ButtonContainer>
        <TransparentLongButton isDelete onClick={handleClearPlanner}>
          Clear
        </TransparentLongButton>
      </ButtonContainer>
    </PlannerContainer>
  );
};

export default Planner;

import React, { useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Icon from "../../../shared/ui/assets/icons/add.svg";
import useClickOutside from "../../../shared/hooks/useClickOutside";
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

const Planner = () => {
  const dispatch = useDispatch();
  const planner = useSelector(selectPlanner);
  const [isAdding, setIsAdding] = useState(false);

  const clickRef = useRef(null);

  const toggleAddItemWidget = () => {
    setIsAdding((prev) => !prev);
  };

  const closeAddItemWidget = () => {
    setIsAdding((prev) => {
      if (prev) {
        return false;
      }

      return prev;
    });
  };

  useClickOutside(clickRef, closeAddItemWidget);

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

  return (
    <PlannerContainer isAdding={isAdding}>
      <Heading1>Planner</Heading1>
      <PlannerContent isEmpty={planner.length === 0}>
        <TimelineContainer>{plannerItems}</TimelineContainer>
        <AddItemContainer isAdding={isAdding} ref={clickRef}>
          <AddButton onClick={toggleAddItemWidget}>
            <AddIcon />
          </AddButton>

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

const AddIcon = styled(Icon)`
  width: 32px;
  height: auto;
`;

export default Planner;

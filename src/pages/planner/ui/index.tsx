import React, { useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import useClickOutside from "../../../shared/hooks/useClickOutside";
import Icon from "../../../shared/ui/assets/icons/add.svg";
import { TransparentLongButton } from "../../../shared/ui/button";
import { Heading1 } from "../../../shared/ui/typography";
import PlannerItem from "../../../widgets/planner-item";
import PlannerItemAdditionForm from "../../../widgets/planner-item-addition-form/ui";
import { clearPlanner, selectPlannerById } from "./plannerSlice/plannerSlice";
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
  const { plannerId } = useParams();
  const planner = useSelector(selectPlannerById(plannerId));
  const [isAdding, setIsAdding] = useState(false);

  const plannerTitle: string = planner?.name || "Sorry, planner not found";

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
    if (planner) {
      return planner.plannerItems.map(
        ({ date, place, activities, id }, index) => (
          <PlannerItem
            date={date}
            place={place}
            activities={activities}
            count={index + 1}
            itemId={id}
            key={id}
          />
        )
      );
    }
  }, [planner]);

  const handleClearPlanner = () => {
    dispatch(clearPlanner(plannerId));
  };

  return (
    <PlannerContainer isAdding={isAdding}>
      <Heading1>{plannerTitle}</Heading1>
      {planner && (
        <>
          <PlannerContent isEmpty={planner.plannerItems.length === 0}>
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
        </>
      )}
    </PlannerContainer>
  );
};

const AddIcon = styled(Icon)`
  width: 32px;
  height: auto;
`;

export default Planner;

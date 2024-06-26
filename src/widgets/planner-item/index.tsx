import dayjs from "dayjs";
import React from "react";

import DeleteIcon from "../../shared/ui/assets/icons/delete-small.svg";
import { Paragraph, SmallerParagraph } from "../../shared/ui/typography";
import {
  Date,
  DateChip,
  DeleteIconButton,
  PlannerItemContainer,
} from "./styled";
import { PlannerItemProps } from "./types";
import { useDispatch } from "react-redux";
import { deletePlannerItem } from "../../pages/planner/ui/plannerSlice/plannerSlice";
import { useParams } from "react-router-dom";

const PlannerItem: React.FC<PlannerItemProps> = ({
  date,
  place,
  activities,
  count,
  itemId,
}) => {
  const dispatch = useDispatch();
  const { plannerId } = useParams();

  const handleDelete = () => {
    dispatch(deletePlannerItem({ plannerId, itemId }));
  };

  return (
    <PlannerItemContainer>
      <Date>{dayjs(date).format("MMMM D, YYYY")}</Date>
      <DateChip>Day {count}</DateChip>
      <Paragraph>{place}</Paragraph>
      <ul>
        {activities.split("\n").map((el, id) => (
          <li key={id}>
            <SmallerParagraph>{el}</SmallerParagraph>
          </li>
        ))}
      </ul>
      <DeleteIconButton onClick={handleDelete}>
        <DeleteIcon />
      </DeleteIconButton>
    </PlannerItemContainer>
  );
};
export default PlannerItem;

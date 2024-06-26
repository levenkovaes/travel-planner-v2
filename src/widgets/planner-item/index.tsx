import dayjs from "dayjs";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
  deletePlannerItem,
  editPlannerItem,
} from "../../pages/planner/ui/plannerSlice/plannerSlice";
import DeleteIcon from "../../shared/ui/assets/icons/delete-small.svg";
import { Paragraph, SmallerParagraph } from "../../shared/ui/typography";
import PlannerItemForm from "../planner-item-form/ui";
import {
  Date,
  DateChip,
  DeleteIconButton,
  PlannerItemCard,
  PlannerItemContainer,
} from "./styled";
import { PlannerItemProps } from "./types";
import useClickOutside from "../../shared/hooks/useClickOutside";

const PlannerItem: React.FC<PlannerItemProps> = ({ item, count }) => {
  const dispatch = useDispatch();
  const { plannerId } = useParams();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const clickRef = useRef(null);

  const handleDelete = () => {
    dispatch(deletePlannerItem({ plannerId, itemId: item.id }));
  };

  const openAddItemWidget = () => {
    setIsEditing(true);
  };

  const closeEditItemWidget = () => {
    setIsEditing((prev) => {
      if (prev) {
        return false;
      } else {
        return prev;
      }
    });
  };

  useClickOutside(clickRef, closeEditItemWidget);

  return (
    <PlannerItemContainer ref={clickRef}>
      <PlannerItemCard onClick={openAddItemWidget}>
        <Date>{dayjs(item.date).format("MMMM D, YYYY")}</Date>
        <DateChip>Day {count}</DateChip>
        <Paragraph>{item.place}</Paragraph>
        <ul>
          {item.activities.split("\n").map((el: string, id: number) => (
            <li key={id}>
              <SmallerParagraph>{el}</SmallerParagraph>
            </li>
          ))}
        </ul>
        <DeleteIconButton onClick={handleDelete}>
          <DeleteIcon />
        </DeleteIconButton>
      </PlannerItemCard>
      {isEditing && (
        <PlannerItemForm
          item={item}
          reducer={editPlannerItem}
          handleClose={closeEditItemWidget}
        />
      )}
    </PlannerItemContainer>
  );
};
export default PlannerItem;

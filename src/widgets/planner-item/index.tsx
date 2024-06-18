import dayjs from "dayjs";
import React from "react";

import { Paragraph, SmallerParagraph } from "../../shared/ui/typography";
import { Date, DateChip, PlannerItemContainer } from "./styled";
import { PlannerItemProps } from "./types";

const PlannerItem: React.FC<PlannerItemProps> = ({
  date,
  place,
  activities,
  count,
}) => {
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
    </PlannerItemContainer>
  );
};
export default PlannerItem;

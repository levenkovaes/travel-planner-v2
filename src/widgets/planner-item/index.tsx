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
      <Date>{date.toLocaleString("en-GB")}</Date>
      <DateChip>Day {count}</DateChip>
      <Paragraph>{place}</Paragraph>
      <SmallerParagraph>{activities}</SmallerParagraph>
    </PlannerItemContainer>
  );
};
export default PlannerItem;

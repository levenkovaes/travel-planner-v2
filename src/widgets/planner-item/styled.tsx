import styled from "styled-components";

import { Chip } from "../../shared/ui/chip";
import { COLORS } from "../../shared/ui/theme";
import { Heading2 } from "../../shared/ui/typography";

export const PlannerItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  border-radius: 8px;
  background-color: ${COLORS.primaryLightColor};
`;

export const Date = styled(Heading2)`
  font-size: 22px;
  color: ${COLORS.primaryDarkColor};
  /* background-color: ${COLORS.primaryColor}; */
`;

export const DateChip = styled(Chip)`
  font-size: 20px;
`;

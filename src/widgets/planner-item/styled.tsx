import styled from "styled-components";

import { Chip } from "../../shared/ui/chip";
import { Heading2 } from "../../shared/ui/typography";

export const PlannerItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.lessContrastBg};
`;

export const Date = styled(Heading2)`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.lightAccent};
`;

export const DateChip = styled(Chip)`
  font-size: 20px;
`;

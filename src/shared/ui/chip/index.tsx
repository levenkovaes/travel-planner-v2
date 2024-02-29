import styled from "styled-components";

import { SmallerParagraph } from "../typography";

export const Chip = styled(SmallerParagraph)`
  display: flex;
  width: fit-content;
  padding: 4px 20px;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.text};
`;

export const ChipContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding: 12px 0 20px;
`;

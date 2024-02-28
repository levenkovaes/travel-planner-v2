import styled from "styled-components";

import CenteringDiv from "../../../shared/ui/centering-div";
import { Paragraph } from "../../../shared/ui/typography";

export const AllChecklistsWrapper = styled(CenteringDiv)`
  flex-grow: 1;

  button:last-child {
    margin-top: auto;
  }
`;

export const ChecklistName = styled(Paragraph)`
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  padding: 7px 0;

  &:last-of-type {
    margin-bottom: 30px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

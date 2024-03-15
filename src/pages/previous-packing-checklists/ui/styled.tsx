import styled from "styled-components";

import { TransparentLongButton } from "../../../shared/ui/button";
import { TransparentDeleteIconButton } from "../../../shared/ui/button/delete-icon/ui/styled";
import CenteringDiv from "../../../shared/ui/centering-div";
import { Paragraph } from "../../../shared/ui/typography";
import MEDIA_QUERY from "../../../shared/constants/styles/media-query";

export const AllChecklistsWrapper = styled(CenteringDiv)`
  flex-grow: 1;

  ${TransparentLongButton} {
    margin-top: auto;
  }
`;

export const ChecklistWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  &:last-of-type {
    margin-bottom: 30px;
  }

  @media ${MEDIA_QUERY.mobile} {
    justify-content: space-between;
    width: 100%;
    text-align: left;
  }

  ${TransparentDeleteIconButton} {
    opacity: 0;
  }

  &:hover {
    ${TransparentDeleteIconButton} {
      opacity: 1;
    }
  }
`;

export const ChecklistName = styled(Paragraph)`
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  padding: 7px 10px 7px 0;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

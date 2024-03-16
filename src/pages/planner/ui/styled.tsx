import styled from "styled-components";

import MEDIA_QUERY from "../../../shared/constants/styles/media-query";
import { IconButton } from "../../../shared/ui/button";
import CenteringDiv from "../../../shared/ui/centering-div";
import Main from "../../../shared/ui/layout/main";

export const PlannerMain = styled(Main)`
  padding-left: 0;
  padding-right: 0;
`;

export const PlannerContainer = styled(CenteringDiv)`
  flex-grow: 1;
`;

export const TimelineContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 30px;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.text};
  }
`;

export const AddButton = styled(IconButton)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.text};
  font-size: 30px;
  z-index: 5;

  &:hover {
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.text};
  }

  &:active {
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.text};
  }
`;

export const ButtonContainer = styled.div`
  align-self: flex-end;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: auto;

  @media ${MEDIA_QUERY.mobile} {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

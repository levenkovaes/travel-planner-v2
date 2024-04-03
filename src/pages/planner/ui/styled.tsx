import styled, { css } from "styled-components";

import MEDIA_QUERY from "../../../shared/constants/styles/media-query";
import { IconButton } from "../../../shared/ui/button";
import CenteringDiv from "../../../shared/ui/centering-div";

export const PlannerContainer = styled(CenteringDiv)`
  flex-grow: 1;
`;

export const PlannerContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 80px;
  gap: 14px;
  align-items: center;
  width: 100%;
  padding-bottom: 40px;
`;

export const TimelineContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 14px;
  width: 100%;
`;

export const AddItemContainer = styled.div<{ isAdding: boolean }>`
  align-self: stretch;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.text};

  ${({ isAdding }) =>
    isAdding &&
    css`
      ${AddButton} {
        align-items: start;
      }
    `}
`;

export const AddButton = styled(IconButton)`
  width: 100%;
  height: 100%;
  padding: 20px 0;
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.text};
  font-size: 30px;

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

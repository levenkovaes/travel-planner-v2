import styled, { css } from "styled-components";

import MEDIA_QUERY from "../../../shared/constants/styles/media-query";
import { IconButton } from "../../../shared/ui/button";
import CenteringDiv from "../../../shared/ui/centering-div";
import { FormContainer } from "../../../widgets/planner-item-addition-form/ui/styled";

export const PlannerContainer = styled(CenteringDiv)<{ isAdding: boolean }>`
  flex-grow: 1;
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

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    position: unset;
  }
`;

export const AddButton = styled(IconButton)`
  width: 100%;
  height: 100%;
  padding: 20px;
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;

  path {
    fill: ${({ theme }) => theme.colors.background};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.text};
  }

  &:active {
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.text};
  }

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    padding: 8px 0;
  }

  @media ${MEDIA_QUERY.mobile} {
    font-size: 24px;
    width: 45px;
  }
`;

export const PlannerContent = styled.div<{ isEmpty: boolean }>`
  display: grid;
  grid-template-columns: 1fr 80px;
  gap: 14px;
  align-items: center;
  width: 100%;
  padding-bottom: 40px;

  ${({ isEmpty }) =>
    isEmpty &&
    css`
      ${AddItemContainer} {
        grid-area: 1 / 1 / 2 / 3;
        justify-self: center;
        width: 53px;
      }

      ${FormContainer} {
        right: unset;
      }
    `}

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const ButtonContainer = styled.div`
  align-self: flex-end;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: auto;
`;

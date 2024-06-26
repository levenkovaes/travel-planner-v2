import styled from "styled-components";

import { Chip } from "../../shared/ui/chip";
import { Heading2 } from "../../shared/ui/typography";
import MEDIA_QUERY from "../../shared/constants/styles/media-query";
import { COLORS } from "../../shared/ui/theme";

export const DeleteIconButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  padding: 10px;
  border: none;
  border-radius: 100px;
  background-color: unset;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.25s ease-in;

  path {
    fill: ${COLORS.grey};
  }

  &:hover {
    path {
      fill: ${COLORS.red};
    }
  }
`;

export const PlannerItemContainer = styled.div`
  position: relative;

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    position: unset;
  }
`;

export const PlannerItemCard = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.lessContrastBg};
  transition: filter 0.25s ease-in;

  &:hover {
    filter: brightness(104%);

    ${DeleteIconButton} {
      opacity: 1;
    }
  }
`;

export const Date = styled(Heading2)`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.lightAccent};

  @media ${MEDIA_QUERY.laptop} {
    font-size: 20px;
  }

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    font-size: 18px;
  }
`;

export const DateChip = styled(Chip)`
  font-size: 20px;
  margin-bottom: 10px;

  @media ${MEDIA_QUERY.laptop} {
    font-size: 18px;
  }

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    font-size: 16px;
  }
`;

import styled from "styled-components";

import { Chip } from "../../shared/ui/chip";
import { Heading2 } from "../../shared/ui/typography";
import MEDIA_QUERY from "../../shared/constants/styles/media-query";

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

  @media ${MEDIA_QUERY.laptop} {
    font-size: 20px;
  }

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    font-size: 18px;
  }
`;

export const DateChip = styled(Chip)`
  font-size: 20px;

  @media ${MEDIA_QUERY.laptop} {
    font-size: 18px;
  }

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    font-size: 16px;
  }
`;

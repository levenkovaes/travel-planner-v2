import styled from "styled-components";

import MEDIA_QUERY from "../../../shared/constants/styles/media-query";
import { TransparentLongButton } from "../../../shared/ui/button";
import { COLORS } from "../../../shared/ui/theme";
import { Heading2 } from "../../../shared/ui/typography";

export const GroupContainer = styled.div`
  padding: 0 20px;
`;

export const GroupHeading = styled(Heading2)`
  padding: 0 0 20px;

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    padding-bottom: 14px;
  }
`;

export const AddIconContainer = styled(TransparentLongButton)`
  height: 32px;
  margin: 26px auto 40px;
  border-radius: 6px;

  path {
    fill: ${({ theme }) => theme.colors.text};
    transition: fill 0.3s ease-in-out;
  }

  &:hover {
    path {
      fill: ${({ theme }) => theme.colors.background};
    }
  }

  &:active {
    path {
      fill: ${COLORS.white};
    }
  }

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    margin: 18px auto 24px;
  }
`;

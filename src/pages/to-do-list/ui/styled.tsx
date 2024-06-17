import styled from "styled-components";

import MEDIA_QUERY from "../../../shared/constants/styles/media-query";
import { NO_PRINT } from "../../../shared/constants/styles/print";
import { TransparentLongButton } from "../../../shared/ui/button";
import { COLORS } from "../../../shared/ui/theme";

export const ListContainer = styled.div`
  min-width: 600px;

  @media ${MEDIA_QUERY.mobile} {
    min-width: unset;
    width: 100%;
  }
`;

export const AddIconContainer = styled(TransparentLongButton)`
  height: 32px;
  margin: 26px auto 40px;
  border-radius: 6px;

  ${NO_PRINT}

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

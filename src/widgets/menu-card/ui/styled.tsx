import styled from "styled-components";

import MEDIA_QUERY from "../../../shared/constants/styles/media-query";
import { TransparentButton } from "../../../shared/ui/button";

export const CardContainer = styled.div`
  padding: 26px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.card};
  transition: all 0.2s linear;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hover};
  }

  @media ${MEDIA_QUERY.laptop} {
    padding: 22px;
  }

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    padding: 20px;
  }
`;

export const CardButton = styled(TransparentButton)`
  margin: 20px auto 0;

  @media ${MEDIA_QUERY.laptop} {
    margin-top: 16px;
  }

  @media ${MEDIA_QUERY.tablet} {
    margin-top: 12px;
  }

  @media ${MEDIA_QUERY.mobile} {
    margin-top: 10px;
  }
`;

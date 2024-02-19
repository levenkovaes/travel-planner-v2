import styled from "styled-components";

import MEDIA_QUERY from "../../../../shared/constants/styles/media-query";
import { TransparentButton } from "../../../../shared/ui/button";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  padding: 26px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.card};
  transition: all 0.3s ease-in-out;

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
  margin: auto auto 0;
`;

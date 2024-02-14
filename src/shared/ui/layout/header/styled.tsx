import styled from "styled-components";

import MEDIA_QUERY from "../../../constants/styles/media-query";
import { IconButton } from "../../button";

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 60px;
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color 0.2s, color 0.2s;

  @media ${MEDIA_QUERY.laptop} {
    padding: 16px 40px;
  }

  @media ${MEDIA_QUERY.tablet} {
    padding: 16px 30px;
  }

  @media ${MEDIA_QUERY.mobile} {
    padding: 10px 20px;
  }
`;

export const LogoButton = styled(IconButton)`
  background: transparent;

  &:hover,
  &:focus,
  &:active {
    background: transparent;

    path {
      fill: path {
        fill: ${({ theme }) => theme.colors.accentColor};
      }
    }
  }
`;

export default SHeader;

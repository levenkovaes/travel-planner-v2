import styled, { css } from "styled-components";

import MEDIA_QUERY from "../../constants/styles/media-query";

export const LINK_FONT_STYLES = css`
  font-size: 22px;
  font-weight: 400;

  @media ${MEDIA_QUERY.laptop} {
    font-size: 20px;
  }

  @media ${MEDIA_QUERY.tablet} {
    font-size: 18px;
  }

  @media ${MEDIA_QUERY.mobile} {
    font-size: 16px;
  }
`;

export const Link = styled.a`
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  padding: 7px 10px 7px 0;
  color: ${({ theme }) => theme.colors.text};
  ${LINK_FONT_STYLES}

  &:hover {
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

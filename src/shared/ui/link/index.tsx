import styled from "styled-components";
import MEDIA_QUERY from "../../constants/styles/media-query";

export const Link = styled.a`
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  padding: 7px 10px 7px 0;
  font-size: 22px;
  font-weight: 400;
  padding-bottom: 8px;
  color: ${({ theme }) => theme.colors.text};

  @media ${MEDIA_QUERY.laptop} {
    font-size: 20px;
  }

  @media ${MEDIA_QUERY.tablet} {
    font-size: 18px;
  }

  @media ${MEDIA_QUERY.mobile} {
    font-size: 16px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

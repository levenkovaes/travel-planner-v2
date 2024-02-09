import styled from "styled-components";
import MEDIA_QUERY from "../../constants/styles/media-query";

export const Heading1 = styled.h1`
  font-size: 60px;
  padding-bottom: 40px;

  @media ${MEDIA_QUERY.laptop} {
    font-size: 40px;
    padding-bottom: 30px;
  }

  @media ${MEDIA_QUERY.tablet} {
    font-size: 32px;
    padding-bottom: 24px;
  }

  @media ${MEDIA_QUERY.mobile} {
    font-size: 26px;
    padding-bottom: 16px;
  }
`;

export const Paragraph1 = styled.p`
  font-size: 32px;

  @media ${MEDIA_QUERY.laptop} {
    font-size: 28px;
  }

  @media ${MEDIA_QUERY.tablet} {
    font-size: 24px;
  }

  @media ${MEDIA_QUERY.mobile} {
    font-size: 20px;
  }
`;

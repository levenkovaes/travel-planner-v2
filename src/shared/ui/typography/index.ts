import styled from "styled-components";

import MEDIA_QUERY from "../../constants/styles/media-query";

export const Heading1 = styled.h1`
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 0.7px;
  padding-bottom: 46px;
  color: ${({ theme }) => theme.colors.text};

  @media ${MEDIA_QUERY.laptop} {
    font-size: 40px;
    padding-bottom: 40px;
  }

  @media ${MEDIA_QUERY.tablet} {
    font-size: 32px;
    padding-bottom: 34px;
  }

  @media ${MEDIA_QUERY.mobile} {
    font-size: 26px;
    padding-bottom: 28px;
  }
`;

export const CenteredHeading1 = styled(Heading1)`
  text-align: center;
`;

export const Heading2 = styled.h2`
  font-size: 30px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};

  @media ${MEDIA_QUERY.laptop} {
    font-size: 26px;
  }

  @media ${MEDIA_QUERY.tablet} {
    font-size: 22px;
  }

  @media ${MEDIA_QUERY.mobile} {
    font-size: 18px;
  }
`;

export const Paragraph = styled.p`
  font-size: 30px;
  font-weight: 400;
  padding-bottom: 8px;
  color: ${({ theme }) => theme.colors.text};

  @media ${MEDIA_QUERY.laptop} {
    font-size: 26px;
  }

  @media ${MEDIA_QUERY.tablet} {
    font-size: 22px;
  }

  @media ${MEDIA_QUERY.mobile} {
    font-size: 18px;
  }
`;

export const SmallerParagraph = styled.p`
  font-size: 26px;
  font-weight: 400;
  padding-bottom: 8px;
  color: ${({ theme }) => theme.colors.text};

  @media ${MEDIA_QUERY.laptop} {
    font-size: 22px;
  }

  @media ${MEDIA_QUERY.tablet} {
    font-size: 18px;
  }

  @media ${MEDIA_QUERY.mobile} {
    font-size: 16px;
  }
`;

export const BoldSpan = styled.span`
  font-weight: 700;
`;

import styled from "styled-components";

import MAIN_PADDING from "../../../shared/constants/styles/main-padding";
import MEDIA_QUERY from "../../../shared/constants/styles/media-query";
import { LongButton } from "../../../shared/ui/button";
import { COLORS } from "../../../shared/ui/theme";
import { Heading1, Paragraph } from "../../../shared/ui/typography";
import bgLaptop from "../ui/assets/bg-laptop.jpg";
import bg from "../ui/assets/bg.jpg";

export const HomeContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    90deg,
    ${COLORS.white} 0%,
    ${COLORS.white} 45%,
    transparent 70%
  );

  header {
    background: transparent;

    button:first-child {
      path {
        fill: ${COLORS.primaryDarkColor};
      }
    }
  }

  footer {
    background: transparent;

    @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
      display: none;
    }
  }

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    background: unset;
  }
`;

export const MainContainer = styled.main`
  display: flex;
  flex-grow: 1;

  &::before {
    content: "";
    width: 65%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;

    @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
      width: 100%;
    }

    @media ${MEDIA_QUERY.laptop}, ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
      background-image: url(${bgLaptop});
    }
  }
`;

export const MainWrapper = styled.div`
  align-self: center;
  flex-grow: 1;
  ${MAIN_PADDING}

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    align-self: unset;
  }
`;

export const Section = styled.div`
  max-width: 50%;

  & button:last-child {
    margin-top: 60px;
  }

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    max-width: unset;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & button:last-child {
      margin-top: 40px;
    }
  }
`;

export const HomeH1 = styled(Heading1)`
  color: ${COLORS.primaryDarkColor};

  @media ${MEDIA_QUERY.mobile} {
    text-align: center;
  }
`;

export const HomeParagraph = styled(Paragraph)`
  color: ${COLORS.primaryDarkColor};

  @media ${MEDIA_QUERY.mobile} {
    text-align: center;
  }
`;

export const HomeButton = styled(LongButton)`
  border: 1px solid ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
    cursor: pointer;
  }

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    border: none;
  }

  @media ${MEDIA_QUERY.mobile} {
    margin: 0 auto;
  }
`;

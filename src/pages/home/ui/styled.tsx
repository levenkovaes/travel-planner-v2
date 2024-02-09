import styled from "styled-components";
import bg from "../ui/imgs/bg.jpg";
import bgLaptop from "../ui/imgs/bg-laptop.jpg";
import bgMobile from "../ui/imgs/bg-mobile.jpg";
import MEDIA_QUERY from "../../../shared/constants/styles/media-query";
import { COLORS } from "../../../shared/ui/theme";

export const HomeContainer = styled.div`
  display: flex;
  min-height: 100%;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
    background-image: url(${bg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top right;

    @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
      background-size: cover;
      opacity: 0.4;
    }

    @media ${MEDIA_QUERY.laptop}, ${MEDIA_QUERY.tablet} {
      background-image: url(${bgLaptop});
    }

    @media ${MEDIA_QUERY.mobile} {
      background-image: url(${bgMobile});
    }
  }
`;

export const HomeWrapper = styled.div`
  flex-grow: 1;
  padding: 160px;
  background: linear-gradient(
    90deg,
    ${COLORS.white} 0%,
    ${COLORS.white} 45%,
    transparent 70%
  );

  @media ${MEDIA_QUERY.laptop} {
    padding: 100px;
  }

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    background: unset;
  }

  @media ${MEDIA_QUERY.tablet} {
    padding: 60px;
  }

  @media ${MEDIA_QUERY.mobile} {
    padding: 40px 20px;
  }
`;

export const Section = styled.div`
  max-width: 50%;

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    max-width: unset;
  }
`;

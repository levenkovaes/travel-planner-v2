import styled from "styled-components";

import MEDIA_QUERY from "../../../shared/constants/styles/media-query";
import PAGE_PADDING from "../../../shared/constants/styles/page-padding";
import { TransparentLongButton } from "../../../shared/ui/button";
import { COLORS } from "../../../shared/ui/theme";
import bgLaptop from "../ui/assets/bg-laptop.jpg";
import bg from "../ui/assets/bg.jpg";

export const HomeContainer = styled.div`
  display: flex;
  min-height: 100%;

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

export const HomeWrapper = styled.div`
  flex-grow: 1;
  ${PAGE_PADDING}
  background: linear-gradient(
    90deg,
    ${COLORS.white} 0%,
    ${COLORS.white} 45%,
    transparent 70%
  );

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    background: unset;
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

export const STransparentLongButton = styled(TransparentLongButton)`
  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
    border: none;
  }
`;

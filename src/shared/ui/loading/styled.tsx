import styled, { keyframes } from "styled-components";

import MEDIA_QUERY from "../../constants/styles/media-query";

const pulseRotate = keyframes`
  0% {
    transform: rotate(0deg) translate(60px, -120px) rotate(0deg);
  }
  30%{
    transform: rotate(180deg) translate(0, -0) rotate(-180deg) scale(1.7);
  }
  40% {
    transform: rotate(180deg) translate(0, -0) rotate(-180deg) scale(1.7);
  }
  100% {
    transform: rotate(360deg) translate(60px, -120px) rotate(-360deg) scale(1);
  }
`;

export const Dot = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: var(--accent-color);
  border-radius: 50%;
  animation: ${pulseRotate} 2s infinite ease-in-out;

  @media ${MEDIA_QUERY.laptop}, ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    width: 50px;
    height: 50px;
  }
`;

export const LoadingContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--background);

  & ${Dot}:nth-child(1) {
    transform: translate(-60px, 0);
  }

  & ${Dot}:nth-child(2) {
    animation-delay: 1s;
    transform: translate(60px, -120px);
  }
`;

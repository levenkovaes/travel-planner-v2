import styled, { css } from "styled-components";

import MEDIA_QUERY from "../../../constants/styles/media-query";
import { COLORS } from "../../theme";
import { SmallerParagraph } from "../../typography";

const SFooter = styled.footer<{ variant?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  ${({ variant }) =>
    variant === "transparentBg" &&
    css`
      background: transparent;

      p {
        color: ${COLORS.primaryDarkColor};

        @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
          color: ${COLORS.primaryLightColor};
        }
      }
    `}
`;

export const FooterParagraph = styled(SmallerParagraph)`
  font-size: 16px;
  text-align: center;

  @media ${MEDIA_QUERY.tablet} {
    font-size: 12px;
  }

  @media ${MEDIA_QUERY.mobile} {
    font-size: 10px;
  }
`;

export default SFooter;

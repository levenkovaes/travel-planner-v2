import styled from "styled-components";

import MAIN_PADDING from "../../../shared/constants/styles/main-padding";
import MEDIA_QUERY from "../../../shared/constants/styles/media-query";
import { Heading1 } from "../../../shared/ui/typography";

export const MenuContainer = styled.div`
  flex-grow: 1;
  ${MAIN_PADDING}
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color 0.2s, color 0.2s;
`;

export const MenuHeading = styled(Heading1)`
  @media ${MEDIA_QUERY.xxl} {
    text-align: center;
  }
`;

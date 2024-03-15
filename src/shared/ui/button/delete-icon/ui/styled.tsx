import styled from "styled-components";

import { TransparentIconButton } from "../..";

export const TransparentDeleteIconButton = styled(TransparentIconButton)`
  margin-left: 8px;
  transition: opacity 0.2s ease-in-out;

  :hover {
    path {
      fill: ${({ theme }) => theme.colors.error};
    }
  }
`;

import styled from "styled-components";

import { TransparentIconButton } from "../../../shared/ui/button";
import { NO_PRINT } from "../../../shared/constants/styles/print";

export const PakingItemButtonContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  opacity: 0;
  ${NO_PRINT}
  margin-left: 8px;
`;

export const PakingItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1px 0;
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  :hover {
    ${PakingItemButtonContainer} {
      opacity: 1;
    }
  }
`;

export const TransparentDeleteIconButton = styled(TransparentIconButton)`
  margin-left: 8px;

  :hover {
    path {
      fill: ${({ theme }) => theme.colors.error};
    }
  }
`;

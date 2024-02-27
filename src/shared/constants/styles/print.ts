import { css } from "styled-components";

export const NO_PRINT = css`
  @media print {
    & {
      display: none;
    }
  }
`;

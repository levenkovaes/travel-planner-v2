import styled from "styled-components";

import { Grid } from "../../../shared/ui/grid";

export const MenuGridContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SMenuGrid = styled(Grid)`
  flex-grow: 1;
  grid-template-columns: 1fr;
  margin: 0;
`;

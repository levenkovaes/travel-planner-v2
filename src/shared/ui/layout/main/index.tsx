import styled from "styled-components";

import MAIN_PADDING from "../../../constants/styles/main-padding";

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  ${MAIN_PADDING}
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
`;

export default Main;

import styled from "styled-components";
import { SmallerParagraph } from "../typography";

const ErrorMessage = styled(SmallerParagraph)`
  display: inline-flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.error};
  margin: -10px 0 10px;
`;

export default ErrorMessage;

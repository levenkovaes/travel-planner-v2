import styled from "styled-components";
import { SmallerParagraph } from "../../../shared/ui/typography";

export const ToDoItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1px 0;

  ${SmallerParagraph} {
    padding: 4px 0;
  }
`;

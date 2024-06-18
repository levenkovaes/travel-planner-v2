import styled from "styled-components";

import Input from "../../../shared/ui/input";
import { Heading1 } from "../../../shared/ui/typography";

export const ListHeadingContainer = styled.div`
  padding-bottom: 46px;
`;

export const ListHeading = styled(Heading1)`
  cursor: pointer;
  padding-bottom: 0;
`;

export const EditForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 100%;
`;

export const EditInput = styled(Input)`
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
`;

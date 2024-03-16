import styled from "styled-components";
import MEDIA_QUERY from "../../../shared/constants/styles/media-query";
import { Button } from "../../../shared/ui/button";

export const FormContainer = styled.div`
  margin: 20px 0 36px;
  padding: 32px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    padding: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  textarea {
    max-width: 500px;
    min-height: 200px;
    max-height: 500px;
  }

  ${Button} {
    align-self: center;
    margin-top: 12px;
  }
`;

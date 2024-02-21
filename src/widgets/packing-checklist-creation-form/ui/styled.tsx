import styled from "styled-components";
import MEDIA_QUERY from "../../../shared/constants/styles/media-query";

export const ChecklistCreationForm = styled.form`
  display: flex;
  flex-direction: column;
  width: clamp(200px, 100%, 500px);

  button {
    align-self: center;
    margin-top: 36px;

    @media ${MEDIA_QUERY.laptop} {
      margin-top: 32px;
    }

    @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
      margin-top: 26px;
    }
  }
`;

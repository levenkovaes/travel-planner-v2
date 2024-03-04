import styled from "styled-components";
import MEDIA_QUERY from "../../../shared/constants/styles/media-query";
import { LongButton } from "../../../shared/ui/button";
import { Paragraph } from "../../../shared/ui/typography";

export const ChecklistCreationForm = styled.form`
  display: flex;
  flex-direction: column;
  width: clamp(200px, 100%, 500px);
`;

export const ChecklistCreationFormParagraph = styled(Paragraph)`
  padding: 16px 0 4px;

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    padding: 8px 0 2px;
  }
`;

export const ChecklistCreationFormButton = styled(LongButton)`
  align-self: center;
  margin-top: 36px;

  @media ${MEDIA_QUERY.laptop} {
    margin-top: 32px;
  }

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    margin-top: 26px;
  }
`;

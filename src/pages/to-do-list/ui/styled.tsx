import styled from "styled-components";
import MEDIA_QUERY from "../../../shared/constants/styles/media-query";

export const ListContainer = styled.div`
  margin-bottom: 50px;

  @media ${MEDIA_QUERY.mobile} {
    width: 100%;
  }
`;

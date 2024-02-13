import styled from "styled-components";
import MEDIA_QUERY from "../../constants/styles/media-query";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media ${MEDIA_QUERY.laptop} {
  }

  @media ${MEDIA_QUERY.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${MEDIA_QUERY.mobile} {
    grid-template-columns: 1fr;
  }
`;

import styled from "styled-components";

import MEDIA_QUERY from "../../constants/styles/media-query";

export const Grid = styled.div`
  margin: 0 auto;
  max-width: 1800px;
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

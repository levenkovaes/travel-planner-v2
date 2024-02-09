import { css } from "styled-components";

import MEDIA_QUERY from "./media-query";

const PAGE_PADDING = css`
  padding: 160px;

  @media ${MEDIA_QUERY.laptop} {
    padding: 100px;
  }

  @media ${MEDIA_QUERY.tablet} {
    padding: 60px;
  }

  @media ${MEDIA_QUERY.mobile} {
    padding: 40px 20px;
  }
`;

export default PAGE_PADDING;

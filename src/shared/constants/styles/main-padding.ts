import { css } from "styled-components";

import MEDIA_QUERY from "./media-query";

const MAIN_PADDING = css`
  padding: 100px 160px;

  @media ${MEDIA_QUERY.laptop} {
    padding: 80px 100px;
  }

  @media ${MEDIA_QUERY.tablet} {
    padding: 60px;
  }

  @media ${MEDIA_QUERY.mobile} {
    padding: 40px 20px;
  }
`;

export default MAIN_PADDING;

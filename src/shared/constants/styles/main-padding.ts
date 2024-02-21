import { css } from "styled-components";

import MEDIA_QUERY from "./media-query";

const MAIN_PADDING = css`
  padding: 80px 160px;

  @media ${MEDIA_QUERY.laptop} {
    padding: 70px 100px;
  }

  @media ${MEDIA_QUERY.tablet} {
    padding: 60px;
  }

  @media ${MEDIA_QUERY.mobile} {
    padding: 20px 20px 30px;
  }
`;

export default MAIN_PADDING;

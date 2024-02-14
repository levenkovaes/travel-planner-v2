import BREAKPOINTS from "./breakpoints";

const MEDIA_QUERY = {
  mobile: `(max-width: ${BREAKPOINTS.s}px)`,
  tablet: `(min-width: ${BREAKPOINTS.s + 1}px) and (max-width: ${
    BREAKPOINTS.l
  }px)`,
  laptop: `(min-width: ${BREAKPOINTS.l + 1}px) and (max-width: ${
    BREAKPOINTS.xl
  }px)`,
  desktop: `(min-width: ${BREAKPOINTS.xl}px)`,
  xxl: `(min-width: ${BREAKPOINTS.xxl}px)`,
};

export default MEDIA_QUERY;

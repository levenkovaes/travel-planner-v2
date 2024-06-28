import styled from "styled-components";

import MEDIA_QUERY from "../../../shared/constants/styles/media-query";
import { TransparentLongButton } from "../../../shared/ui/button";
import { TransparentDeleteIconButton } from "../../../shared/ui/button/delete-icon/ui/styled";
import CenteringDiv from "../../../shared/ui/centering-div";

export const AllPlannersWrapper = styled(CenteringDiv)`
  flex-grow: 1;

  ${TransparentLongButton} {
    margin-top: auto;
  }
`;

export const PlannersWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  &:last-of-type {
    margin-bottom: 30px;
  }

  @media ${MEDIA_QUERY.mobile} {
    justify-content: space-between;
    width: 100%;
    text-align: left;
  }

  ${TransparentDeleteIconButton} {
    opacity: 0;
  }

  &:hover {
    ${TransparentDeleteIconButton} {
      opacity: 1;
    }
  }
`;

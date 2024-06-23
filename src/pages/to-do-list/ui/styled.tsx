import styled from "styled-components";

import MEDIA_QUERY from "../../../shared/constants/styles/media-query";
import { NO_PRINT } from "../../../shared/constants/styles/print";
import { TransparentLongButton } from "../../../shared/ui/button";
import Input from "../../../shared/ui/input";
import { COLORS } from "../../../shared/ui/theme";
import { Heading1 } from "../../../shared/ui/typography";

export const ListContainer = styled.div`
  min-width: 600px;

  @media ${MEDIA_QUERY.mobile} {
    min-width: unset;
    width: 100%;
  }
`;

export const ListHeadingContainer = styled.div`
  padding-bottom: 46px;
`;

export const ListHeading = styled(Heading1)`
  cursor: pointer;
  padding-bottom: 0;
`;

export const AddIconContainer = styled(TransparentLongButton)`
  height: 32px;
  margin: 26px auto 40px;
  border-radius: 6px;

  ${NO_PRINT}

  path {
    fill: ${({ theme }) => theme.colors.text};
    transition: fill 0.3s ease-in-out;
  }

  &:hover {
    path {
      fill: ${({ theme }) => theme.colors.background};
    }
  }

  &:active {
    path {
      fill: ${COLORS.white};
    }
  }

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    margin: 18px auto 24px;
  }
`;

export const EditForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 100%;
`;

export const EditInput = styled(Input)`
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
`;

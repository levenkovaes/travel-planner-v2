import styled from "styled-components";

import MEDIA_QUERY from "../../constants/styles/media-query";

const Input = styled.input<{ $error?: boolean }>`
  padding: 10px 20px;
  margin: 6px 0 20px;
  border: 2px solid
    ${(props) =>
      props.$error
        ? ({ theme }) => theme.colors.error
        : ({ theme }) => theme.colors.input.border};
  border-radius: 6px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.input.text};
  font-size: 26px;
  font-weight: 400;
  transition: all 0.2s ease-in-out;

  @media ${MEDIA_QUERY.laptop} {
    font-size: 22px;
    margin: 4px 0 20px;
  }

  @media ${MEDIA_QUERY.tablet} {
    font-size: 20px;
    margin: 2px 0 20px;
  }

  @media ${MEDIA_QUERY.mobile} {
    font-size: 18px;
    margin: 0 0 20px;
  }

  :focus {
    outline: none;
    border-color: ${(props) =>
      props.$error
        ? ({ theme }) => theme.colors.error
        : ({ theme }) => theme.colors.accentColor};
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.input.placeholder};
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;

    [type="number"] {
      appearance: textfield;
    }
  }
`;

export default Input;

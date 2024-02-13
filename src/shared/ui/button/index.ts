import styled from "styled-components";

import MEDIA_QUERY from "../../constants/styles/media-query";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(120px, 100%, 250px);
  min-width: fit-content;
  padding: 6px 20px;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.button.background};
  color: ${({ theme }) => theme.colors.button.text};
  border: none;
  border-radius: 8px;
  font-size: 26px;
  transition: all 0.2s linear;

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.button.hover};
    cursor: pointer;
  }

  :active {
    background-color: ${({ theme }) => theme.colors.button.background};
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.button.disabled};
    border-color: ${({ theme }) => theme.colors.button.disabled};
    cursor: auto;
  }

  @media ${MEDIA_QUERY.laptop} {
    font-size: 22px;
  }

  @media ${MEDIA_QUERY.tablet} {
    font-size: 20px;
    padding: 10px 20px;
  }

  @media ${MEDIA_QUERY.mobile} {
    font-size: 18px;
    padding: 10px 20px;
  }
`;

export const LongButton = styled(Button)`
  width: clamp(120px, 100%, 350px);
`;

export const TransparentButton = styled(Button)`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.button.text};

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.button.text};
    color: ${({ theme }) => theme.colors.button.background};
    cursor: pointer;
  }

  :active {
    background-color: ${({ theme }) => theme.colors.button.active};
  }
`;

export const TransparentLongButton = styled(TransparentButton)`
  width: clamp(120px, 100%, 350px);
`;

export const IconButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  padding: 10px;
  border-radius: 100px;

  @media ${MEDIA_QUERY.laptop} {
    width: 54px;
    height: 54px;
  }

  @media ${MEDIA_QUERY.tablet} {
    width: 50px;
    height: 50px;
  }

  @media ${MEDIA_QUERY.mobile} {
    width: 40px;
    height: 40px;
  }
`;

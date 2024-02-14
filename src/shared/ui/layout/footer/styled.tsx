import styled from "styled-components";

const SFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color 0.2s, color 0.2s;

  p {
    font-size: 16px;
    text-align: center;
  }
`;

export default SFooter;

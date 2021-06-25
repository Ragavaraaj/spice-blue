import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;
    --border-color: rgb(230, 230, 230);
    --primary-color: rgb(71,187,127)
  }

  *, * ::after, * ::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const AppDiv = styled.div`
  height: 90vh;
  font-family: "Roboto", sans-serif;
`;

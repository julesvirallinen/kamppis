import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Donate } from "./components/Donate";
import { Hero } from "./components/Hero";

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    > body {
      margin: 0;
    }

    > * {
      font-family: 'Roboto', sans-serif;    }
  }

`;

const Filler = styled.div`
  height: 30rem;
  background-color: red;
`;

const Filler2 = styled.div`
  height: 30rem;
  background-color: black;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Donate />
      <Filler2 />
    </>
  );
}

export default App;

import React from "react";
import { Navbar } from "common/Navbar";

import "./App.css";
import { colors } from "config/colors";
import styled from "styled-components";
import { MainBody } from "common/Body";

const ContainerOne = styled.div`
  height: 100vh;
  background: linear-gradient(
    to right,
    ${colors.backgroundOne} 0%,
    ${colors.backgroundOne} 65%,
    ${colors.backgroundTwo} 35%,
    ${colors.backgroundTwo} 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <ContainerOne>
      <Navbar />
      <MainBody />
    </ContainerOne>
  );
}

export default App;

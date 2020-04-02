import React from 'react';
import styled from 'styled-components';
import './App.css';

import { colors } from 'config/colors';
import { Hero } from 'components/home/Hero';
import { Navbar } from 'components/common/Navbar';
import { indentSizelaptop } from 'config/spacing';

const Container = styled.div`
  height: 100vh;
  padding: ${indentSizelaptop}px;
  background: linear-gradient(
    to right,
    ${colors.backgroundOne} 0%,
    ${colors.backgroundOne} 60%,
    ${colors.backgroundTwo} 40%,
    ${colors.backgroundTwo} 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <Hero />
      <Navbar />
    </Container>
  );
}

export default App;

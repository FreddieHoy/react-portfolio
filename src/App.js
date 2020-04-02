import React from 'react';
import styled from 'styled-components';
import './App.css';

import { colors } from 'config/colors';
import { Hero } from 'components/home/Hero';

const Container = styled.div`
  height: 100vh;
  padding: 5%;
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
    <Container>
      <Hero />
    </Container>
  );
}

export default App;

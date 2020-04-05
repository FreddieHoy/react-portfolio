import './App.css';

import { FixedElements } from 'components/common/FixedElements';
import { Experience } from 'components/experience/Experience';
import { Home } from 'components/home/Home';
import { colors } from 'config/colors';
import { indentSizeLaptop, indentSizeMobile } from 'config/spacing';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  padding: ${indentSizeMobile}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to right,
    ${colors.backgroundOne} 0%,
    ${colors.backgroundOne} 65%,
    ${colors.backgroundTwo} 35%,
    ${colors.backgroundTwo} 100%
  );

  @media (min-width: 641px) {
    padding: ${indentSizeLaptop}px;
    background: linear-gradient(
      to right,
      ${colors.backgroundOne} 0%,
      ${colors.backgroundOne} 65%,
      ${colors.backgroundTwo} 35%,
      ${colors.backgroundTwo} 100%
    );
  }
`;

export const App = () => (
  <Container>
    <HashRouter>
      <FixedElements />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/experience" component={Experience} />
      </Switch>
    </HashRouter>
  </Container>
);

export default App;

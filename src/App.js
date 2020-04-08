import './App.css';

import { FixedElements } from 'components/common/FixedElements';
import { Experience } from 'components/experience/Experience';
import { GAExp } from 'components/experience/experiences/GAExp';
import { LyvlyExp } from 'components/experience/experiences/lyvly/LyvlyExp';
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
    align-items: flex-start;
    padding: ${indentSizeLaptop}px;
    background: linear-gradient(
      to right,
      ${colors.backgroundOne} 0%,
      ${colors.backgroundOne} 50%,
      ${colors.backgroundTwo} 50%,
      ${colors.backgroundTwo} 100%
    );
  }
`;

export const App = () => (
  <Container>
    <HashRouter>
      <FixedElements />
      <Switch>
        <Route path="/experience/lyvly" component={LyvlyExp} />
        <Route path="/experience/generalassembly" component={GAExp} />
        <Route path="/experience" component={Experience} />
        <Route path="/home" component={Home} />
      </Switch>
    </HashRouter>
  </Container>
);

export default App;

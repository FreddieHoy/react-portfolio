import './App.css';

import { FixedElements } from 'components/common/FixedElements';
import { Experience } from 'components/experience/experience';
import { Home } from 'components/home/Home';
import { colors } from 'config/colors';
import { indentSizelaptop } from 'config/spacing';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

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

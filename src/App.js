import './App.css';

import { About } from 'components/about/About';
import { ContactLinks } from 'components/common/ContactLinks';
import { NameHeading } from 'components/common/NameHeading';
import NavBar from 'components/common/NavBar';
import { Experience } from 'components/experience/Experience';
import { GAExp } from 'components/experience/experiences/generalAssembly/GA';
import { LyvlyExp } from 'components/experience/experiences/lyvly/Lyvly';
import { Home } from 'components/home/Home';
import { colors } from 'config/colors';
import { tabletBreakPoint } from 'config/spacing';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background: linear-gradient(
    to right,
    ${colors.backgroundOne} 0%,
    ${colors.backgroundOne} 65%,
    ${colors.backgroundTwo} 35%,
    ${colors.backgroundTwo} 100%
  );

  @media (min-width: ${tabletBreakPoint}px) {
    align-items: center;
    background: ${colors.backgroundOne};
  }
`;

const HeadingContianer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 15vh;

  @media (min-width: ${tabletBreakPoint}px) {
    height: 0px;
  }
`;

export const App = () => (
  <Container>
    <HashRouter>
      <HeadingContianer>
        <NameHeading />
        <NavBar />
      </HeadingContianer>
      <Switch>
        <Route path="/experience/lyvly" component={LyvlyExp} />
        <Route path="/experience/generalassembly" component={GAExp} />
        <Route path="/experience" component={Experience} />
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
      </Switch>
    </HashRouter>
    <ContactLinks />
  </Container>
);

export default App;

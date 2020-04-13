import './App.css';

import { About } from 'components/about/About';
import { ContactLinks } from 'components/common/ContactLinks';
import { Heading } from 'components/common/Heading';
import NavBar from 'components/common/NavBar';
import { Experience } from 'components/experience/Experience';
import { GAExp } from 'components/experience/experiences/generalAssembly/GAExp';
import { LyvlyExp } from 'components/experience/experiences/lyvly/LyvlyExp';
import { Home } from 'components/home/Home';
import { colors } from 'config/colors';
import { mobileBreakPoint } from 'config/spacing';
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

  @media (min-width: ${mobileBreakPoint}px) {
    align-items: flex-start;
    background: linear-gradient(
      to right,
      ${colors.backgroundOne} 0%,
      ${colors.backgroundOne} 55%,
      ${colors.backgroundTwo} 45%,
      ${colors.backgroundTwo} 100%
    );
  }
`;

const HeadingContianer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 15vh;
`;

export const App = () => (
  <Container>
    <HashRouter>
      <HeadingContianer>
        <Heading />
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

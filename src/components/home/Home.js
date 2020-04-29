import { indentSizeMobile, tabletBreakPoint } from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

import { Display } from './Display';

const Container = styled.div`
  position: relative;
  padding: 0 ${indentSizeMobile}px 15vh ${indentSizeMobile}px;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: ${tabletBreakPoint}px) {
    height: 100vh;
    margin: 0 auto;
    width: 660px;
    padding-bottom: 0;
  }
`;

export const Home = () => (
  <Container>
    <Display />
  </Container>
);

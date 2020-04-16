import { fadeIn } from 'config/keyframes';
import {
  indentSizeLaptop,
  indentSizeMobile,
  tabletBreakPoint
} from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

import { TitleTag } from './TitleTag';

const Container = styled.div`
  animation: ${fadeIn} 1s ease;
  padding: ${indentSizeMobile}px;
  height: 85vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: ${tabletBreakPoint}px) {
    height: 100vh;
    padding: ${indentSizeLaptop}px;
  }
`;

export const Home = () => (
  <Container>
    <TitleTag />
  </Container>
);

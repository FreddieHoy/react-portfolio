import {
  indentSizeLaptop,
  indentSizeMobile,
  mobileBreakPoint
} from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

import { TitleTag } from './TitleTag';

const Container = styled.div`
  padding: ${indentSizeMobile}px;
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: ${mobileBreakPoint}px) {
    padding: ${indentSizeLaptop}px;
  }
`;

export const Home = () => (
  <Container>
    <TitleTag />
  </Container>
);

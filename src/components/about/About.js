import { indentSizeMobile } from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

import { AboutTag } from './AboutTag';

const Container = styled.div`
  height: 90vh;
  padding: ${indentSizeMobile}px;
`;

export const About = () => (
  <Container>
    <AboutTag />
    THis iS tHe AbOUt paGE
  </Container>
);

import React from 'react';
import styled from 'styled-components';

import { GeneralAssembly } from './GeneralAssembly';
import { Lyvly } from './Lyvly';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Experiences = () => (
  <Container>
    <Lyvly />
    <GeneralAssembly />
  </Container>
);

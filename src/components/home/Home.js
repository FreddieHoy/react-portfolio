import React from 'react';
import styled from 'styled-components';

import { TitleTag } from '../common/TitleTag';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Home = () => (
  <Container>
    <TitleTag />
  </Container>
);

import React from 'react';
import styled from 'styled-components';

import { NameTitle } from 'config/fontStyles';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Hero = () => (
  <Container>
    <div>
      <NameTitle>FREDDIE</NameTitle>
      <NameTitle>HOY</NameTitle>
    </div>
    <div>I am a software engineer</div>
    <div>
      <a href="www.google.com">EMAIL ME</a>
    </div>
  </Container>
);

import { indentSizeMobile } from 'config/spacing';
import React from 'react';
import Freddie from 'static/Freddie.jpg';
import styled from 'styled-components';

import { AboutContentInterests, AboutContentMain } from './AboutContent';
import { AboutTag } from './AboutTag';

const Container = styled.div`
  height: 90vh;
  padding: 0 ${indentSizeMobile}px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const About = () => (
  <Container>
    <AboutTag />
    <AboutContentMain />
    <Image src={Freddie} alt="Freddie Hoy" />
    <AboutContentInterests />
  </Container>
);

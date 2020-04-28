import { Container } from 'components/common/Container';
import { mobileBreakPoint } from 'config/spacing';
import React from 'react';
import HeadShot from 'static/HeadShot.jpg';
import styled from 'styled-components';

import {
  AboutContentContact,
  AboutContentInterests,
  AboutContentMain
} from './AboutContent';
import { AboutTitle } from './AboutTitle';

const Image = styled.img`
  width: 100%;
  height: 100%;
  padding: 26px 0;

  @media (min-width: ${mobileBreakPoint}px) {
    width: 40%;
  }
`;

export const About = () => (
  <Container>
    <AboutTitle />
    <AboutContentMain />
    <Image src={HeadShot} alt="Head Shot of Freddie Hoy" />
    <AboutContentContact />
    <AboutContentInterests />
  </Container>
);

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
import { AboutTag } from './AboutTag';

const Image = styled.img`
  width: 100%;
  height: auto;
  padding: 26px 0;

  @media (min-width: ${mobileBreakPoint}px) {
    width: 40%;
  }
`;

export const About = () => (
  <Container>
    <AboutTag />
    <AboutContentMain />
    <Image src={HeadShot} alt="Head Shot of Freddie Hoy" />
    <AboutContentContact />
    <AboutContentInterests />
  </Container>
);

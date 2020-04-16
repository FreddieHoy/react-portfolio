import { fadeIn } from 'config/keyframes';
import {
  indentSizeMobile,
  laptopBreakPoint,
  mobileBreakPoint,
  tabletBreakPoint
} from 'config/spacing';
import React from 'react';
import HeadShot from 'static/HeadShot.jpg';
import styled from 'styled-components';

import {
  AboutContentContact,
  AboutContentInterests,
  AboutContentMain
} from './AboutContent';
import { AboutTag } from './AboutTag';

const Container = styled.div`
  animation: ${fadeIn} 1s ease;
  padding: 20px ${indentSizeMobile}px 100px ${indentSizeMobile}px;

  @media (min-width: ${mobileBreakPoint}px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 0 140px 0;
    margin: 0 auto;
    width: 500px;
  }

  @media (min-width: ${tabletBreakPoint}px) {
    padding: 100px 0 100px 0;
    width: 660px;
  }

  @media (min-width: ${laptopBreakPoint}px) {
    padding: 100px 0 100px 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  padding: 26px 0;

  @media (min-width: ${mobileBreakPoint}px) {
    width: 160px;
    padding: 0;
  }
  @media (min-width: ${laptopBreakPoint}px) {
  }
`;

export const About = () => (
  <Container>
    <AboutTag />
    <AboutContentMain />
    <Image src={HeadShot} alt="Head Shot of Freddie Hoy" />
    <AboutContentInterests />
    <AboutContentContact />
  </Container>
);

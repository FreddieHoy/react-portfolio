import {
  indentSizeLaptop,
  indentSizeMobile,
  laptopSpaceForNavbar,
  mobileBreakPoint
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
  padding: 0 ${indentSizeMobile}px 100px ${indentSizeMobile}px;

  @media (min-width: ${mobileBreakPoint}px) {
    padding: 10px ${laptopSpaceForNavbar}px 30px ${indentSizeLaptop}px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 85vh;
    align-content: space-between;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  padding: 26px 0;
  @media (min-width: ${mobileBreakPoint}px) {
    width: 250px;
    order: 3;
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

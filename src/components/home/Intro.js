import { Paragraph } from 'config/fontStyles';
import { fadeInAndOut } from 'config/keyframes';
import { mobileBreakPoint } from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

import { introText } from './HomeText';

const Container = styled.div`
  position: absolute;
  font-size: 36px;
  @media (min-width: ${mobileBreakPoint}px) {
    width: 100%;
  }
`;

const IntroOne = styled.div`
  animation: ${fadeInAndOut} 1s ease-in;
  animation-delay: 0.5s;
  animation-fill-mode: both;
`;
const IntroTwo = styled.div`
  animation: ${fadeInAndOut} 1s ease-in;
  animation-delay: 1.5s;
  animation-fill-mode: both;
  width: 100%;
  text-align: center;
`;
const IntroThree = styled.div`
  animation: ${fadeInAndOut} 1s ease-in;
  animation-delay: 2.5s;
  animation-fill-mode: both;
  width: 100%;
  text-align: right;
`;

export const Intro = () => (
  <Container>
    <IntroOne>
      <Paragraph>{introText.hello}</Paragraph>
    </IntroOne>
    <IntroTwo>
      <Paragraph>{introText.and}</Paragraph>
    </IntroTwo>
    <IntroThree>
      <Paragraph>{introText.welcome}</Paragraph>
    </IntroThree>
  </Container>
);

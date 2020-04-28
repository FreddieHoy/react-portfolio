import { Paragraph } from 'config/fontStyles';
import { fadeInAndOut } from 'config/keyframes';
import { mobileBreakPoint } from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

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
      <Paragraph>Hello</Paragraph>
    </IntroOne>
    <IntroTwo>
      <Paragraph>And</Paragraph>
    </IntroTwo>
    <IntroThree>
      <Paragraph>Welcome</Paragraph>
    </IntroThree>
  </Container>
);

import { HeadingTwo, Paragraph } from 'config/fontStyles';
import React from 'react';
import styled from 'styled-components';

import { AboutText } from './AboutText';

const Container = styled.div`
  padding: 30px 0;
`;

export const AboutContentMain = () => (
  <Container>
    <HeadingTwo>{AboutText.bigText.hello}</HeadingTwo>
    <HeadingTwo>{AboutText.bigText.engineer}</HeadingTwo>
    <Paragraph>
      I studied engineering at the University of Nottingham. I then went on to
      complete the Software Engineer Immersive bootcamp at General Assembly
      London.
    </Paragraph>
  </Container>
);

export const AboutContentInterests = () => (
  <Container>
    <HeadingTwo>Other Interests</HeadingTwo>
    <Paragraph>
      In September 2017, I organized a completely self sufficient bike tour for
      9 days cycling from Nice, France to Barcelona, Spain. The cycle took 8
      days covering 900km. Along with 2 university friends, we raised £3,500.
    </Paragraph>

    <Paragraph>I played hockey for the University of Nottingham.</Paragraph>
    <Paragraph>
      I am part of a Sunday leauge football team that won the 2018-19 South
      London cup final.
    </Paragraph>
    <Paragraph>In 2013 I became a qualified ski instructor.</Paragraph>
    <Paragraph>I have completed over 24 scuba dives.</Paragraph>
    <Paragraph>Ive been teaching myself guitar for a year now!</Paragraph>
  </Container>
);

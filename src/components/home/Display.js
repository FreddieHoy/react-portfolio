import { colors } from 'config/colors';
import {
  HeadingOne,
  HeadingTwo,
  MessageBlue,
  Paragraph
} from 'config/fontStyles';
import { fadeInTop } from 'config/keyframes';
import { indentSizeMobile, mobileBreakPoint } from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  padding-right: ${indentSizeMobile}px;
`;

const DisplayOne = styled.div`
  animation: ${fadeInTop} 0.1s ease-in;
  animation-delay: 5s;
  animation-fill-mode: both;
  font-size: 18px;
  @media (min-width: ${mobileBreakPoint}px) {
  }
`;

const DisplayTwo = styled.div`
  animation: ${fadeInTop} 0.1s ease-in;
  animation-delay: 5.15s;
  animation-fill-mode: both;
  h1 {
    color: ${colors.whiteText};
  }
`;

const DisplayThree = styled.div`
  animation: ${fadeInTop} 0.1s ease-in;
  animation-delay: 5.3s;
  animation-fill-mode: both;
  h2 {
    font-size: 36px;
    color: ${colors.offWhiteText};
    @media (min-width: ${mobileBreakPoint}px) {
      font-size: 40px;
    }
  }
`;

const DisplayFour = styled.div`
  animation: ${fadeInTop} 0.1s ease-in;
  animation-delay: 5.45s;
  animation-fill-mode: both;
  p {
    color: ${colors.whiteText};
    font-size: 18px;
  }
`;

export const Display = () => (
  <Container>
    <DisplayOne>
      <MessageBlue>Hi there, my name is:</MessageBlue>
    </DisplayOne>
    <DisplayTwo>
      <HeadingOne>Freddie Hoy</HeadingOne>
    </DisplayTwo>
    <DisplayThree>
      <HeadingTwo>I enjoy building sophisticated web apps.</HeadingTwo>
    </DisplayThree>
    <DisplayFour>
      <Paragraph>
        I am a Software Engineer living London. I have had some really exciting
        experiences building some awesome web products. Check out what I have
        been up to.
      </Paragraph>
    </DisplayFour>
  </Container>
);

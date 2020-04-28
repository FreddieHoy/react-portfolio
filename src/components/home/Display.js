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

import { DisplayText } from './HomeText';

const Container = styled.div`
  position: absolute;
  padding-right: ${indentSizeMobile}px;
`;

const DisplayOne = styled.div`
  animation: ${fadeInTop} 0.2s ease-in;
  animation-delay: 3.5s;
  animation-fill-mode: both;
  font-size: 18px;
  @media (min-width: ${mobileBreakPoint}px) {
  }
`;

const DisplayTwo = styled.div`
  animation: ${fadeInTop} 0.2s ease-in;
  animation-delay: 3.7s;
  animation-fill-mode: both;
  h1 {
    color: ${colors.whiteText};
  }
`;

const DisplayThree = styled.div`
  animation: ${fadeInTop} 0.2s ease-in;
  animation-delay: 3.9s;
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
  animation: ${fadeInTop} 0.2s ease-in;
  animation-delay: 4.1s;
  animation-fill-mode: both;
  p {
    color: ${colors.whiteText};
    font-size: 18px;
  }
`;

export const Display = () => (
  <Container>
    <DisplayOne>
      <MessageBlue>{DisplayText.hi}</MessageBlue>
    </DisplayOne>
    <DisplayTwo>
      <HeadingOne>{DisplayText.fred}</HeadingOne>
    </DisplayTwo>
    <DisplayThree>
      <HeadingTwo>{DisplayText.enjoy}</HeadingTwo>
    </DisplayThree>
    <DisplayFour>
      <Paragraph>{DisplayText.about}</Paragraph>
    </DisplayFour>
  </Container>
);

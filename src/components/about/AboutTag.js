import { BlueText, HeadingOne, RedText } from 'config/fontStyles';
import { laptopBreakPoint, mobileBreakPoint } from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

import { AboutTextTitle } from './AboutText';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: ${mobileBreakPoint}px) {
    width: 70%;
    margin: 0 auto 20px auto;
  }
  @media (min-width: ${laptopBreakPoint}px) {
    width: 60%;
  }
`;

export const AboutTag = () => (
  <Container>
    <HeadingOne>
      {AboutTextTitle.title.this}
      <RedText>{AboutTextTitle.title.about}</RedText>
      {AboutTextTitle.title.me}
      <BlueText>{AboutTextTitle.punctuation.fullstop}</BlueText>
    </HeadingOne>
  </Container>
);

import { BlueText, HeadingOne, RedText } from 'config/fontStyles';
import { laptopBreakPoint, mobileBreakPoint } from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

import { ExperienceText } from './ExperienceText';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: ${mobileBreakPoint}px) {
    margin: 20px auto;
  }
  @media (min-width: ${laptopBreakPoint}px) {
    width: 70%;
  }
`;

export const ExperienceTitle = () => (
  <Container>
    <HeadingOne>
      {ExperienceText.title.these}
      <RedText>{ExperienceText.title.exp}</RedText>
      <BlueText>{ExperienceText.punctuation.fullstop}</BlueText>
    </HeadingOne>
  </Container>
);

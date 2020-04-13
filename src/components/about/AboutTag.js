import { colors } from 'config/colors';
import { TitleTagWord } from 'config/fontStyles';
import { mobileBreakPoint } from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

const constWords = [
  { text: 'about', color: colors.redText, endSpace: true },
  { text: 'me', color: colors.whiteText, endSpace: false },
  { text: '.', color: colors.blueText, endSpace: false }
];

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
  justify-content: flex-start;

  @media (min-width: ${mobileBreakPoint}px) {
    width: 50%;
    margin: 30px 0;
  }
`;

export const AboutTag = () => (
  <Container>
    {constWords.map((word) => (
      <TitleTagWord
        color={word.color}
        endSpace={word.endSpace}
        text={word.text}
        key={word.text}
      />
    ))}
  </Container>
);

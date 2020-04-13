import { colors } from 'config/colors';
import { TitleTagWord } from 'config/fontStyles';
import { mobileBreakPoint } from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

const constWords = [
  { text: 'this is', color: colors.whiteText, endSpace: true },
  { text: 'more', color: colors.whiteText, endSpace: true },
  { text: 'about', color: colors.redText, endSpace: true },
  { text: 'me', color: colors.whiteText, endSpace: false },
  { text: '.', color: colors.blueText, endSpace: false }
];

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  justify-content: center;

  @media (min-width: ${mobileBreakPoint}px) {
    justify-content: flex-start;
    width: 60%;
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

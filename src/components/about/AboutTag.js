import { colors } from 'config/colors';
import { TitleTagWord } from 'config/fontStyles';
import { laptopBreakPoint, mobileBreakPoint } from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

const constWords = [
  { text: 'This is', color: colors.whiteText, endSpace: true },
  { text: 'more', color: colors.whiteText, endSpace: true },
  { text: 'about', color: colors.redText, endSpace: true },
  { text: 'me', color: colors.whiteText, endSpace: false },
  { text: '.', color: colors.blueText, endSpace: false }
];

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;

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

import { colors } from 'config/colors';
import { TitleTagWord } from 'config/fontStyles';
import { mobileBreakPoint } from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

const constWords = [
  { text: 'this', color: colors.whiteText, endSpace: true },
  { text: 'is', color: colors.whiteText, endSpace: true },
  { text: 'my', color: colors.whiteText, endSpace: true },
  { text: 'experience', color: colors.redText, endSpace: false },
  { text: '.', color: colors.blueText, endSpace: false }
];

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;

  @media (min-width: ${mobileBreakPoint}px) {
    justify-content: flex-start;
    margin: 20px 0;
    width: 70%;
  }
`;

export const ExperienceTag = () => (
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

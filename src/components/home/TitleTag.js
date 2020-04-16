import { colors } from 'config/colors';
import { TitleTagWord } from 'config/fontStyles';
import { laptopBreakPoint, tabletBreakPoint } from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

const constWords = [
  { text: 'I', color: colors.whiteText, endSpace: false },
  { text: "'", color: colors.blueText, endSpace: false },
  { text: 'm', color: colors.whiteText, endSpace: true },
  { text: 'a', color: colors.whiteText, endSpace: true },
  { text: 'software', color: colors.redText, endSpace: true },
  { text: 'engineer', color: colors.whiteText, endSpace: false },
  { text: '.', color: colors.blueText, endSpace: true }
];

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20%;
  width: 100%;

  @media (min-width: ${tabletBreakPoint}px) {
    padding-bottom: 0;
  }
  @media (min-width: ${laptopBreakPoint}px) {
    div {
      transition: font-size 0.5s ease;
    }
    :hover > div {
      transition: font-size 1s ease;
      font-size: 70px;
    }
  }
`;

export const TitleTag = () => (
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

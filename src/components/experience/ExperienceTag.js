import { colors } from 'config/colors';
import { TitleTagWord } from 'config/fontStyles';
import React from 'react';
import styled from 'styled-components';

const constWords = [
  { text: 'this', color: colors.whiteText, endSpace: true },
  { text: 'is', color: colors.blueText, endSpace: true },
  { text: 'my', color: colors.whiteText, endSpace: true },
  { text: 'experience', color: colors.redText, endSpace: false },
  { text: '.', color: colors.blueText, endSpace: false }
];

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ExperienceTag = () => (
  <Container>
    {constWords.map((word) => (
      <TitleTagWord
        color={word.color}
        endSpace={word.endSpace}
        text={word.text}
      />
    ))}
  </Container>
);

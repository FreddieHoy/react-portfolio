import React from 'react';
import styled from 'styled-components';

import { TitleTagWord } from 'config/fontStyles';
import { colors } from 'config/colors';

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
`;

export const TitleTag = () => (
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

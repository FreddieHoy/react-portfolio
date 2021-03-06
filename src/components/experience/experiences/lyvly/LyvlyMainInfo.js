import { Paragraph, RedText } from 'config/fontStyles';
import { tabletBreakPoint } from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

import { lyvlyText } from './LyvlyText';

const Container = styled.div`
  @media (min-width: ${tabletBreakPoint}px) {
    margin: 10px 0;
  }
`;

export const LyvlyMainInfo = () => (
  <Container>
    <Paragraph>
      <RedText>{lyvlyText.info.role}</RedText>
      {lyvlyText.info.title}
    </Paragraph>
    <Paragraph>
      <RedText>{lyvlyText.info.dates}</RedText>
      {lyvlyText.info.december}
    </Paragraph>
    <Paragraph>{lyvlyText.lyvly}</Paragraph>
    <Paragraph>{lyvlyText.first}</Paragraph>
  </Container>
);

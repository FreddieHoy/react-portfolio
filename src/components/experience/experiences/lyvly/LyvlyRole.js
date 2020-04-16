import {
  HeadingTwo,
  Paragraph,
  RedText,
  StyledAnchor
} from 'config/fontStyles';
import { mobileBreakPoint, tabletBreakPoint } from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

import { lyvlyText } from './LyvlyText';

const Container = styled.div`
  @media (min-width: ${mobileBreakPoint}px) {
    width: 60%;
  }
  @media (min-width: ${tabletBreakPoint}px) {
    margin: 20px 0;
  }
`;

export const LyvlyRole = () => (
  <Container>
    <HeadingTwo>
      <RedText>{lyvlyText.role.title}</RedText>
    </HeadingTwo>
    <Paragraph>
      <RedText>{lyvlyText.role.front.frontEnd}</RedText>
      {lyvlyText.role.front.sig}
      <StyledAnchor href="www.lyvly.uk">
        {lyvlyText.role.front.website}
      </StyledAnchor>
      {lyvlyText.role.front.coverage}
    </Paragraph>
    <Paragraph>
      <RedText>{lyvlyText.role.back.title}</RedText>
      {lyvlyText.role.back.business}
      <StyledAnchor href="www.thehomeppl.com">
        {lyvlyText.role.back.website}
      </StyledAnchor>
      {lyvlyText.role.back.api}
    </Paragraph>
    <Paragraph>
      <RedText>{lyvlyText.role.methodology.title}</RedText>
      {lyvlyText.role.methodology.learn}
    </Paragraph>
  </Container>
);

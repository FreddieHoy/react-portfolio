import {
  HeadingTwo,
  Paragraph,
  RedText,
  StyledAnchor
} from 'config/fontStyles';
import {
  desktopBreakPoint,
  ipadProHeightBreakPoint,
  mobileBreakPoint
} from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

import { lyvlyText } from './LyvlyText';

const Container = styled.div`
  @media (min-width: ${mobileBreakPoint}px) {
    width: 60%;
    order: 2;
  }
  @media (min-width: ${desktopBreakPoint}px) {
    padding: 20px 0 100px 0;
  }
  @media (min-height: ${ipadProHeightBreakPoint}px) {
    padding: 30px 0 100px 0;
  }
`;

const RoleContainer = styled.div`
  padding: 10px 0;
  @media (min-width: ${mobileBreakPoint}px) {
    padding: 0;
  }
`;

export const ExperienceContent = () => (
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
    <Paragraph>{lyvlyText.team}</Paragraph>
    <RoleContainer>
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
    </RoleContainer>
  </Container>
);

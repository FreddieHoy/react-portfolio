import {
  HeadingTwo,
  Paragraph,
  RedText,
  StyledAnchor
} from 'config/fontStyles';
import React from 'react';
// import LyvlyHomePage from 'static/LyvlyHomePage.png';
import styled from 'styled-components';

import { lyvlyText } from './LyvlyText';

const Container = styled.div`
  overflow: scroll;
  height: 75%;

  @media (min-width: 641px) {
    width: 60%;
  }
`;

// const WebsiteImage = styled.img`
//   width: 100%;
//   height: auto;
// `;

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

// <WebsiteImage src={LyvlyHomePage} alt="Lyvly home page" />

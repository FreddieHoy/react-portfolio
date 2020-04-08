import {
  HeadingTwo,
  Paragraph,
  RedText,
  StyledAnchor
} from 'config/fontStyles';
import React from 'react';
import styled from 'styled-components';

import { lyvlyText } from './LyvlyText';

const Role = styled.div`
  padding: 30px 0;
`;

export const ExperienceContent = () => (
  <div>
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
    <Role>
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
    </Role>
  </div>
);

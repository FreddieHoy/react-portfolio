import {
  indentSizeMobile,
  mobileBreakPoint,
  mobileSpaceForHeading
} from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

import { Experiences } from './experiences/Experiences';
import { ExperienceTag } from './ExperienceTag';

const Container = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10% ${indentSizeMobile}px ${mobileSpaceForHeading}px
    ${indentSizeMobile}px;

  @media (min-width: ${mobileBreakPoint}px) {
    width: 48%;
  }
`;

export const Experience = () => (
  <Container>
    <ExperienceTag />
    <Experiences />
  </Container>
);

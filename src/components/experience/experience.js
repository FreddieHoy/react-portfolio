import {
  indentSizeLaptop,
  indentSizeMobile,
  laptopSpaceForNavbar,
  mobileBreakPoint,
  mobileSpaceForHeading
} from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

import { Experiences } from './experiences/Experiences';
import { ExperienceTag } from './ExperienceTag';
import { SkillSheet } from './SkillSheet';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10% ${indentSizeMobile}px ${mobileSpaceForHeading}px
    ${indentSizeMobile}px;

  @media (min-width: ${mobileBreakPoint}px) {
    padding: 5% ${laptopSpaceForNavbar}px 30px ${indentSizeLaptop}px;
    flex-wrap: wrap;
    height: 90vh;
  }
`;

export const Experience = () => (
  <Container>
    <ExperienceTag />
    <Experiences />
    <SkillSheet />
  </Container>
);

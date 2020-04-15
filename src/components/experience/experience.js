import {
  desktopBreakPoint,
  indentSizeLaptop,
  indentSizeMobile,
  laptopSpaceForNavbar,
  mobileBreakPoint,
  mobileSpaceForHeading,
  monitorBreakPoint
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
  padding: 30px ${indentSizeMobile}px ${mobileSpaceForHeading}px
    ${indentSizeMobile}px;
  @media (min-width: ${mobileBreakPoint}px) {
    padding: 10px ${laptopSpaceForNavbar}px 30px ${indentSizeLaptop}px;
  }
  @media (min-width: ${desktopBreakPoint}px) {
    flex-wrap: wrap;
    height: 85vh;
  }
  @media (min-width: ${monitorBreakPoint}px) {
    padding: 50px ${laptopSpaceForNavbar}px 0 ${indentSizeLaptop}px;
  }
`;

export const Experience = () => (
  <Container>
    <ExperienceTag />
    <Experiences />
    <SkillSheet />
  </Container>
);

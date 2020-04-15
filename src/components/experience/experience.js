import {
  desktopBreakPoint,
  indentSizeLaptop,
  indentSizeMobile,
  laptopBreakPoint,
  laptopSpaceForNavbar,
  mobileBreakPoint,
  mobileSpaceForHeading,
  tabletSpaceForNavbar
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
    padding: 10px ${tabletSpaceForNavbar}px 30px ${indentSizeLaptop}px;
    height: 85vh;
    flex-wrap: wrap;
    align-content: space-between;
  }

  @media (min-width: ${laptopBreakPoint}px) {
    padding: 10px ${laptopSpaceForNavbar}px 30px ${indentSizeLaptop}px;
    flex-wrap: wrap;
    height: 85vh;
  }

  @media (min-width: ${desktopBreakPoint}px) {
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

import { Container } from 'components/common/Container';
import React from 'react';

import { Experiences } from './experiences/Experiences';
import { ExperienceTitle } from './ExperienceTitle';
import { SkillSheet } from './SkillSheet';

export const Experience = () => (
  <Container>
    <ExperienceTitle />
    <Experiences />
    <SkillSheet />
  </Container>
);

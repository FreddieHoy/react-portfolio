import { Container } from 'components/common/Container';
import React from 'react';

import { Experiences } from './experiences/Experiences';
import { ExperienceTag } from './ExperienceTag';
import { SkillSheet } from './SkillSheet';

export const Experience = () => (
  <Container>
    <ExperienceTag />
    <Experiences />
    <SkillSheet />
  </Container>
);

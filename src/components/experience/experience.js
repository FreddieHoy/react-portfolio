import React from 'react';
import styled from 'styled-components';

import { Experiences } from './experiences/Experiences';
import { ExperienceTag } from './ExperienceTag';

const Container = styled.div`
  height: 75%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;

  @media (min-width: 641px) {
    width: 48%;
  }
`;

export const Experience = () => (
  <Container>
    <ExperienceTag />
    <Experiences />
  </Container>
);

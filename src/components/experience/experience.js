import React from 'react';
import styled from 'styled-components';

import { Experiences } from './experiences/Experiences';
import { ExperienceTag } from './ExperienceTag';

const Container = styled.div`
  height: 75%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  padding: 10px;
  @media (min-width: 641px) {
    width: 60%;
  }
`;

export const Experience = () => (
  <Container>
    <ExperienceTag />
    <Experiences />
  </Container>
);

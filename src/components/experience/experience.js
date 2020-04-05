import React from 'react';
import styled from 'styled-components';

import { Experiences } from './experiences/Experiences';
import { ExperienceTag } from './ExperienceTag';

const Container = styled.div`
  height: 85%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  padding: 10px;
`;

export const Experience = () => (
  <Container>
    <ExperienceTag />
    <Experiences />
  </Container>
);

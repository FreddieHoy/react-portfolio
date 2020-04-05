import { colors } from 'config/colors';
import React from 'react';
import styled from 'styled-components';

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

const Experiences = styled.div`
  height: 72%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.borderWhite};
  box-shadow: 0px 0px 5px 5px black;
  border-radius: 3px;
  padding: 10px;
`;

export const Experience = () => (
  <Container>
    <ExperienceTag />
    <Experiences />
  </Container>
);

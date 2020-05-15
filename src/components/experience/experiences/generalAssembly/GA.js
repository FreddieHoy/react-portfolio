import { BackArrow } from 'components/common/BackArrow';
import { Container } from 'components/common/Container';
import { BlueText, HeadingOne, HeadingTwo, RedText } from 'config/fontStyles';
import { mobileBreakPoint } from 'config/spacing';
import React from 'react';
import GATeam from 'static/GATeam.jpeg';
import styled from 'styled-components';

import { GAContentMain } from './GAContent';
import { GAProject } from './GAProject';
import { GATechSheet } from './GATechSheet';
import { GAMainText, GAProjectText } from './GAText';
import { ProjectCarousel } from './ProjectCarousel';

const HeadingContainer = styled(HeadingOne)`
  width: 100%;
  margin: 20px auto;
  text-align: center;
`;

const ProjectContainer = styled.div`
  @media (min-width: ${mobileBreakPoint}px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const ProjectsHeading = styled(HeadingTwo)`
  with: 100%;
  margin: 10px 0;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  margin: 20px 0;
`;

export const GAExp = () => (
  <Container>
    <BackArrow toPage="/experience" />
    <HeadingContainer>
      {GAMainText.title.study}
      <RedText>{GAMainText.title.london}</RedText>
      <BlueText>{GAMainText.punctuation.fullStop}</BlueText>
    </HeadingContainer>
    <GAContentMain />
    <ProjectsHeading>
      <RedText>{GAMainText.fourProjects}</RedText>
    </ProjectsHeading>
    <ProjectCarousel />
    <ProjectContainer>
      {GAProjectText.projectInfoArray.map((project) => (
        <GAProject project={project} key={project.title} />
      ))}
    </ProjectContainer>
    <StyledImage src={GATeam} alt="Lyvly logo" />
    <GATechSheet />
  </Container>
);

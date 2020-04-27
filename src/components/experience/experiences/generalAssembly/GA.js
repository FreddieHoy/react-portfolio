import { BackArrow } from 'components/common/BackArrow';
import { Container } from 'components/common/Container';
import { colors } from 'config/colors';
import { BlueText, HeadingOne, HeadingTwo, RedText } from 'config/fontStyles';
import { mobileBreakPoint, tabletBreakPoint } from 'config/spacing';
import React from 'react';
import GALogoNoWords from 'static/GALogoNoWords.png';
import GATeam from 'static/GATeam.jpeg';
import styled from 'styled-components';

import { GAContentMain } from './GAContent';
import { GAProject } from './GAProject';
import { GATechSheet } from './GATechSheet';
import { GAMainText, GAProjectText } from './GAText';
import { ProjectCarousel } from './ProjectCarousel';

const LogoBackground = styled.a`
  margin: 40px 0;
  padding: 30px;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  @media (min-width: ${tabletBreakPoint}px) {
    transition: background-color 0.4s ease;
    :hover {
      background-color: ${colors.lightBlueText};
    }
  }
`;

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
    <LogoBackground
      href="https://generalassemb.ly/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={GALogoNoWords} alt="GA logo" width={70} height={70} />
    </LogoBackground>
  </Container>
);

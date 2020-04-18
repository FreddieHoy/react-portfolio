import {
  HeadingTwo,
  LightBlueText,
  Paragraph,
  RedText
} from 'config/fontStyles';
import { mobileBreakPoint } from 'config/spacing';
import React from 'react';
import GitHubIcon from 'static/GitHubIcon.svg';
import GitHubIconHighlighted from 'static/GitHubIconHighlighted.svg';
import styled from 'styled-components';

import { GAProjectText } from './GAText';

const ContainerProject = styled.div`
  padding: 20px 0;
  @media (min-width: ${mobileBreakPoint}px) {
    padding: 10px;
    width: 50%;
  }
`;

const FlexedHeading = styled(HeadingTwo)`
  display: flex;
`;

const AboutContianer = styled.div``;

const TechContianer = styled.div``;

const GitHubLink = styled.div`
  height: 30px;
  width: 26px;
  margin: 0 0 -5px 10px;
  background-image: url(${GitHubIcon});
  :hover {
    background-image: url(${GitHubIconHighlighted});
  }
`;

export const GAProject = ({ project }) => (
  <ContainerProject>
    <FlexedHeading>
      <RedText>{project.title}</RedText>
      <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">
        <GitHubLink />
      </a>
    </FlexedHeading>
    <AboutContianer>
      <Paragraph>
        <LightBlueText>{GAProjectText.titles.about}</LightBlueText>
      </Paragraph>
      <Paragraph>{project.about}</Paragraph>
    </AboutContianer>
    <TechContianer>
      <Paragraph>
        <LightBlueText>{GAProjectText.titles.tech}</LightBlueText>
      </Paragraph>
      <Paragraph>{project.technologies}</Paragraph>
    </TechContianer>
  </ContainerProject>
);

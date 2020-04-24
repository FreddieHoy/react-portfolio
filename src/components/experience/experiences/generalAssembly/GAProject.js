import { colors } from 'config/colors';
import {
  HeadingTwo,
  LightBlueText,
  Paragraph,
  RedText
} from 'config/fontStyles';
import { mobileBreakPoint } from 'config/spacing';
import React from 'react';
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

const GitHubLink = styled.div`
  height: 30px;
  width: 26px;
  margin: 0 0 -5px 10px;
  i {
    color: ${colors.backgroundThree};
    transition: color 0.4s ease;
    :hover {
      color: ${colors.lightBlueText};
    }
  }
`;

export const GAProject = ({ project }) => (
  <ContainerProject>
    <FlexedHeading>
      <RedText>{project.title}</RedText>
      <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">
        <GitHubLink>
          <i className="fab fa-github-square" />
        </GitHubLink>
      </a>
    </FlexedHeading>
    <Paragraph>
      <LightBlueText>{GAProjectText.titles.about}</LightBlueText>
    </Paragraph>
    <Paragraph>{project.about}</Paragraph>
    <Paragraph>
      <LightBlueText>{GAProjectText.titles.tech}</LightBlueText>
    </Paragraph>
    <Paragraph>{project.technologies}</Paragraph>
  </ContainerProject>
);

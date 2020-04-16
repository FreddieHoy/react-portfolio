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

const ContainerProject = styled.div``;

const FlexedHeading = styled(HeadingTwo)``;

const FlexedImage = styled.img`
  width: 100%;
  @media (min-width: ${mobileBreakPoint}px) {
    width: 500px;
  }
`;

const AboutContianer = styled.div``;

const TechContianer = styled.div``;

export const GAProject = ({ project }) => (
  <ContainerProject>
    <FlexedHeading>
      <RedText>{project.title}</RedText>
    </FlexedHeading>
    <FlexedImage src={project.image} alt={project.title} width={360} />
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

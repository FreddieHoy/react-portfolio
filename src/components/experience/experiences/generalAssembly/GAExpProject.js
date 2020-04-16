import {
  HeadingTwo,
  LightBlueText,
  Paragraph,
  RedText
} from 'config/fontStyles';
import {
  desktopBreakPoint,
  laptopBreakPoint,
  mobileBreakPoint
} from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

const ContainerProject = styled.div`
  padding: 10px 0;
  @media (min-width: ${mobileBreakPoint}px) {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    order: 4;
  }

  @media (min-width: ${laptopBreakPoint}px) {
    height: 460px;
    flex-wrap: wrap;
  }
  @media (min-width: ${desktopBreakPoint}px) {
    height: 580px;
    flex-wrap: wrap;
  }
`;

const FlexedHeading = styled(HeadingTwo)`
  @media (min-width: ${mobileBreakPoint}px) {
    order: 1;
    width: 60%;
  }
`;

const FlexedImage = styled.img`
  width: 100%;
  @media (min-width: ${mobileBreakPoint}px) {
    order: 2;
    margin: 5px 0;
    width: 60%;
  }
  @media (min-width: ${laptopBreakPoint}px) {
    width: 58%;
  }
  @media (min-width: ${desktopBreakPoint}px) {
    width: 55%;
  }
`;

const AboutContianer = styled.div`
  @media (min-width: ${mobileBreakPoint}px) {
    order: 3;
    width: 60%;
  }
  @media (min-width: ${laptopBreakPoint}px) {
    width: 36%;
    padding-top: 40px;
  }
`;

const TechContianer = styled.div`
  @media (min-width: ${mobileBreakPoint}px) {
    order: 4;
    width: 60%;
  }
  @media (min-width: ${laptopBreakPoint}px) {
    width: 36%;
  }
`;

export const GAContentProject = ({ project }) => (
  <ContainerProject>
    <FlexedHeading>
      <RedText>{project.title}</RedText>
    </FlexedHeading>
    <FlexedImage src={project.image} alt={project.title} width={360} />
    <AboutContianer>
      <Paragraph>
        <LightBlueText>About</LightBlueText>
      </Paragraph>
      <Paragraph>{project.about}</Paragraph>
    </AboutContianer>
    <TechContianer>
      <Paragraph>
        <LightBlueText>Technologies</LightBlueText>
      </Paragraph>
      <Paragraph>{project.technologies}</Paragraph>
    </TechContianer>
  </ContainerProject>
);

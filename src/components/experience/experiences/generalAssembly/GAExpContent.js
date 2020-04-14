import {
  HeadingTwo,
  LightBlueText,
  Paragraph,
  RedText
} from 'config/fontStyles';
import { mobileBreakPoint } from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

import { GAMainText } from './GAText';

const ContainerMain = styled.div`
  padding: 10px 0;
  @media (min-width: ${mobileBreakPoint}px) {
    width: 60%;
  }
`;

const ContainerProject = styled.div`
  padding: 10px 0;
  @media (min-width: ${mobileBreakPoint}px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 300px;
    align-content: space-between;
  }
`;

const FlexedHeading = styled(HeadingTwo)`
  @media (min-width: ${mobileBreakPoint}px) {
    order: 1;
    width: 60%;
  }
`;

const FlexedImage = styled.img`
  @media (min-width: ${mobileBreakPoint}px) {
    order: 4;
    margin: 40px 0;
    width: 400px;
  }
`;

const AboutContianer = styled.div`
  @media (min-width: ${mobileBreakPoint}px) {
    order: 2;
    width: 60%;
  }
`;

const TechContianer = styled.div`
  @media (min-width: ${mobileBreakPoint}px) {
    order: 3;
    width: 60%;
  }
`;

export const GAContentMain = () => (
  <ContainerMain>
    <Paragraph>
      <RedText>{GAMainText.main.role.role}</RedText>
      {GAMainText.main.role.student}
    </Paragraph>
    <Paragraph>
      <RedText>{GAMainText.main.date.dates}</RedText>
      {GAMainText.main.date.june}
    </Paragraph>
    <Paragraph>
      {GAMainText.main.body.summer}
      <LightBlueText>{GAMainText.main.body.fundamentals}</LightBlueText>
      {GAMainText.main.body.group}
    </Paragraph>
    <Paragraph>
      {GAMainText.main.body.basics}
      <LightBlueText>{GAMainText.main.body.javaScript}</LightBlueText>
      {GAMainText.main.body.frameworks}
      <LightBlueText>{GAMainText.main.body.react}</LightBlueText>
      {GAMainText.punctuation.fullStop}
    </Paragraph>
    <Paragraph>{GAMainText.main.body.four}</Paragraph>
  </ContainerMain>
);

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

import {
  HeadingTwo,
  LightBlueText,
  Paragraph,
  RedText
} from 'config/fontStyles';
import React from 'react';
import styled from 'styled-components';

import { GAMainText } from './GAText';

const Container = styled.div`
  padding: 10px 0;
`;

export const GAContentMain = () => (
  <Container>
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
  </Container>
);

export const GAContentProject = ({ project }) => (
  <Container>
    <HeadingTwo>
      <RedText>{project.title}</RedText>
    </HeadingTwo>
    <img src={project.image} alt={project.title} width={360} />
    <Paragraph>
      <LightBlueText>About</LightBlueText>
    </Paragraph>
    <Paragraph>{project.about}</Paragraph>
    <Paragraph>
      <LightBlueText>Technologies</LightBlueText>
    </Paragraph>
    <Paragraph>{project.technologies}</Paragraph>
  </Container>
);

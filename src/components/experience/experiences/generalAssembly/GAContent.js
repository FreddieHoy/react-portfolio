import { LightBlueText, Paragraph, RedText } from 'config/fontStyles';
import React from 'react';
import styled from 'styled-components';

import { GAMainText } from './GAText';

const ContainerMain = styled.div`
  margin-bottom: 20px;
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

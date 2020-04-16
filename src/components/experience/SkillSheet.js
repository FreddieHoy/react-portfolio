import { HeadingTwo, LightBlueText, Paragraph } from 'config/fontStyles';
import {
  ipadProHeightBreakPoint,
  laptopBreakPoint,
  mobileBreakPoint
} from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

import { SkillsSheet } from './ExperienceText';

const Container = styled.div`
  width: 100%;
  text-align: left;
  padding: 10px 0;
  @media (min-width: ${mobileBreakPoint}px) {
    width: 30%;
    text-align: right;
    padding: 0 10px;
  }
  @media (min-width: ${laptopBreakPoint}px) {
    width: 30%;
    text-align: right;
    padding: 0 10px;
  }
  @media (min-height: ${ipadProHeightBreakPoint}px) {
    width: 60%;
  }
`;

const Skill = styled(Paragraph)`
  margin: 0;
  font-size: 20px;

  @media (min-width: ${mobileBreakPoint}px) {
    font-size: 20px;
  }
  @media (min-width: ${laptopBreakPoint}px) {
    font-size: 24px;
    transition: font-size 0.4s ease;
    :hover {
      font-size: 30px;
    }
  }
`;

export const SkillSheet = () => (
  <Container>
    <HeadingTwo>
      <LightBlueText>Skills Sheet</LightBlueText>
    </HeadingTwo>
    <Skill>{SkillsSheet.javaScript}</Skill>
    <Skill>{SkillsSheet.react}</Skill>
    <Skill>{SkillsSheet.jest}</Skill>
    <Skill>{SkillsSheet.exzyme}</Skill>
    <Skill>{SkillsSheet.node}</Skill>
    <Skill>{SkillsSheet.express}</Skill>
    <Skill>{SkillsSheet.restful}</Skill>
    <Skill>{SkillsSheet.graphql}</Skill>
    <Skill>{SkillsSheet.sql}</Skill>
    <Skill>{SkillsSheet.mongoDB}</Skill>
    <Skill>{SkillsSheet.git}</Skill>
    <Skill>{SkillsSheet.aglie}</Skill>
    <Skill>{SkillsSheet.npm}</Skill>
    <Skill>{SkillsSheet.html}</Skill>
    <Skill>{SkillsSheet.typeScript}</Skill>
    <Skill>{SkillsSheet.python}</Skill>
  </Container>
);

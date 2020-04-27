import { colors } from 'config/colors';
import { HeadingTwo, LightBlueText, Paragraph } from 'config/fontStyles';
import { laptopBreakPoint, mobileBreakPoint } from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

import { SkillsSheet } from './ExperienceText';

const Container = styled.div`
  width: 100%;
  text-align: left;
  padding: 10px 0;

  @media (min-width: ${mobileBreakPoint}px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Skill = styled(Paragraph)`
  margin: 0;
  font-size: 24px;

  @media (min-width: ${mobileBreakPoint}px) {
    width: 50%;
    font-size: 24px;
  }
  @media (min-width: ${laptopBreakPoint}px) {
    width: 33%;
    transition: color 0.4s ease;
    :hover {
      color: ${colors.redText};
    }
  }
`;

const SkillsHeading = styled(HeadingTwo)`
  width: 100%;
  font-size: 28px;
`;

export const SkillSheet = () => (
  <Container>
    <SkillsHeading>
      <LightBlueText>Skills Sheet</LightBlueText>
    </SkillsHeading>
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

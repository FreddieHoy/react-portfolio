import { HeadingTwo, LightBlueText, Paragraph } from 'config/fontStyles';
import { mobileBreakPoint } from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  text-align: left;
  padding: 10px 0;
  @media (min-width: ${mobileBreakPoint}px) {
    width: 30%;
    text-align: right;
    padding: 0 10px;
  }
`;

const Skill = styled(Paragraph)`
  margin: 0;
  font-size: 20px;

  @media (min-width: ${mobileBreakPoint}px) {
    font-size: 24px;
    transition: font-size 0.4s ease;
    :hover {
      font-size: 26px;
    }
  }
`;

export const SkillSheet = () => (
  <Container>
    <HeadingTwo>
      <LightBlueText>Skills Sheet</LightBlueText>
    </HeadingTwo>
    <Skill>JavaScript ES6</Skill>
    <Skill>React.js</Skill>
    <Skill>Git and GitHub</Skill>
    <Skill>Jest</Skill>
    <Skill>Enzyme</Skill>
    <Skill>Node.js</Skill>
    <Skill>Express</Skill>
    <Skill>RESTful APIs</Skill>
    <Skill>GraphQL</Skill>
    <Skill>MonogDB</Skill>
    <Skill>HTML and CSS</Skill>
    <Skill>TypeScript</Skill>
    <Skill>Python</Skill>
    <Skill>npm and yarn</Skill>
    <Skill>Agile Methodology</Skill>
    <Skill>SQL</Skill>
  </Container>
);

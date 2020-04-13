import { colors } from 'config/colors';
import { HeadingTwo, Paragraph, RedText } from 'config/fontStyles';
import { mobileBreakPoint } from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  order: 4;
  text-align: right;
  margin-top: 20px;
`;

const TechItem = styled(Paragraph)`
  margin: 0;
  color: ${colors.whiteText};
  font-size: 18px;
  @media (min-width: ${mobileBreakPoint}px) {
    align-content: right;
    transition: font-size 0.4s ease;
    :hover {
      font-size: 24px;
    }
  }
`;

export const LyvlyTechSheet = () => (
  <Container>
    <HeadingTwo>
      <RedText>Tech sheet</RedText>
    </HeadingTwo>
    <div>
      <TechItem>TypeScript / JavaScript</TechItem>
      <TechItem>React</TechItem>
      <TechItem>Jest</TechItem>
      <TechItem>Enzyme</TechItem>
      <TechItem>GraphQL</TechItem>
      <TechItem>Git / GitHub</TechItem>
      <TechItem>Node.js</TechItem>
      <TechItem>Express </TechItem>
      <TechItem>RESTful APIs</TechItem>
      <TechItem>GraphQL</TechItem>
      <TechItem>MongoDB</TechItem>
      <TechItem>SQL databases</TechItem>
      <TechItem>Agile methodology</TechItem>
      <TechItem>npm / yarn</TechItem>
    </div>
  </Container>
);

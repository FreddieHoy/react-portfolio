import { colors } from 'config/colors';
import { HeadingTwo, Paragraph, RedText } from 'config/fontStyles';
import { laptopBreakPoint, mobileBreakPoint } from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  order: 4;
  text-align: left;

  @media (min-width: ${mobileBreakPoint}px) {
    text-align: right;
    padding: 20px 0;
  }
  @media (min-width: ${laptopBreakPoint}px) {
    padding: 2% 0;
  }
`;

const TechItem = styled(Paragraph)`
  margin: 0;
  color: ${colors.whiteText};
  font-size: 15px;

  @media (min-width: ${laptopBreakPoint}px) {
    font-size: 20px;
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
      <TechItem>JavaScript</TechItem>
      <TechItem>TypeScript</TechItem>
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

import { colors } from 'config/colors';
import { HeadingTwo, Paragraph, RedText } from 'config/fontStyles';
import React from 'react';
import styled from 'styled-components';

const TechItem = styled(Paragraph)`
  margin: 0;
  color: ${colors.whiteText};
  font-size: 18px;
`;

export const LyvlyTechSheet = () => (
  <div>
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
  </div>
);

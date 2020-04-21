import { colors } from 'config/colors';
import { HeadingTwo, Paragraph, RedText } from 'config/fontStyles';
import { mobileBreakPoint, tabletBreakPoint } from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

import { TechSheetText } from './LyvlyText';

const Container = styled.div`
  order: 4;
  text-align: left;
  width: 100%;

  @media (min-width: ${mobileBreakPoint}px) {
    width: 30%;
    text-align: right;
  }

  @media (min-width: ${tabletBreakPoint}px) {
    margin: 20px 0;
  }
`;

const TechItem = styled(Paragraph)`
  margin: 0;
  color: ${colors.whiteText};
  font-size: 18px;
  transition: color 0.4s ease;
  :hover {
    color: ${colors.redText};
  }
`;

export const LyvlyTechSheet = () => (
  <Container>
    <HeadingTwo>
      <RedText>{TechSheetText.title}</RedText>
    </HeadingTwo>
    <div>
      <TechItem>{TechSheetText.javaScript}</TechItem>
      <TechItem>{TechSheetText.typeScript}</TechItem>
      <TechItem>{TechSheetText.react}</TechItem>
      <TechItem>{TechSheetText.jest}</TechItem>
      <TechItem>{TechSheetText.enzyme}</TechItem>
      <TechItem>{TechSheetText.git}</TechItem>
      <TechItem>{TechSheetText.node}</TechItem>
      <TechItem>{TechSheetText.express}</TechItem>
      <TechItem>{TechSheetText.restful}</TechItem>
      <TechItem>{TechSheetText.graphQL}</TechItem>
      <TechItem>{TechSheetText.mongoDB}</TechItem>
      <TechItem>{TechSheetText.sql}</TechItem>
      <TechItem>{TechSheetText.agile}</TechItem>
      <TechItem>{TechSheetText.npm}</TechItem>
    </div>
  </Container>
);

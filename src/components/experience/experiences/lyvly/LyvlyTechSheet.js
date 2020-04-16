import { colors } from 'config/colors';
import { HeadingTwo, Paragraph, RedText } from 'config/fontStyles';
import { laptopBreakPoint, mobileBreakPoint } from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

import { TechSheetText } from './LyvlyText';

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

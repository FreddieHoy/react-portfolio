import { colors } from 'config/colors';
import { HeadingTwo, Paragraph, RedText } from 'config/fontStyles';
import { mobileBreakPoint, tabletBreakPoint } from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

import { TechSheetText } from './LyvlyText';

const Container = styled.div`
  text-align: left;
  width: 100%;

  @media (min-width: ${mobileBreakPoint}px) {
    width: 100%;
  }

  @media (min-width: ${tabletBreakPoint}px) {
    margin: 20px 0;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TechItem = styled(Paragraph)`
  margin: 0;
  font-size: 18px;
  width: 48%;
  transition: color 0.4s ease;
  :hover {
    color: ${colors.redText};
  }
  @media (min-width: ${mobileBreakPoint}px) {
    width: 32%;
  }
`;

export const LyvlyTechSheet = () => (
  <Container>
    <HeadingTwo>
      <RedText>{TechSheetText.title}</RedText>
    </HeadingTwo>
    <TechList>
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
      <TechItem>{TechSheetText.aws}</TechItem>
      <TechItem>{TechSheetText.agile}</TechItem>
      <TechItem>{TechSheetText.npm}</TechItem>
    </TechList>
  </Container>
);

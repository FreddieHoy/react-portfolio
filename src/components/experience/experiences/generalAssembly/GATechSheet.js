import { colors } from 'config/colors';
import { HeadingTwo, Paragraph, RedText } from 'config/fontStyles';
import { mobileBreakPoint, tabletBreakPoint } from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

import { TechSheetText } from './GAText';

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
  width: 49%;
  transition: color 0.4s ease;
  :hover {
    color: ${colors.redText};
  }
  @media (min-width: ${mobileBreakPoint}px) {
    width: 32%;
  }
`;

export const GATechSheet = () => (
  <Container>
    <HeadingTwo>
      <RedText>{TechSheetText.title}</RedText>
    </HeadingTwo>
    <TechList>
      <TechItem>{TechSheetText.javaScript}</TechItem>
      <TechItem>{TechSheetText.python}</TechItem>
      <TechItem>{TechSheetText.react}</TechItem>
      <TechItem>{TechSheetText.git}</TechItem>
      <TechItem>{TechSheetText.node}</TechItem>
      <TechItem>{TechSheetText.express}</TechItem>
      <TechItem>{TechSheetText.restful}</TechItem>
      <TechItem>{TechSheetText.mongoDB}</TechItem>
      <TechItem>{TechSheetText.sql}</TechItem>
      <TechItem>{TechSheetText.npm}</TechItem>
      <TechItem>{TechSheetText.chrome}</TechItem>
      <TechItem>{TechSheetText.atom}</TechItem>
    </TechList>
  </Container>
);

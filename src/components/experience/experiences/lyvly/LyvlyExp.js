import { colors } from 'config/colors';
import { BlueText, HeadingOne, RedText } from 'config/fontStyles';
import {
  desktopBreakPoint,
  indentSizeLaptop,
  indentSizeMobile,
  ipadProHeightBreakPoint,
  laptopBreakPoint,
  laptopSpaceForNavbar,
  mobileBreakPoint,
  tabletSpaceForNavbar
} from 'config/spacing';
import React from 'react';
import LyvlyLogo from 'static/LyvlyLogo.svg';
import styled from 'styled-components';

import { ExperienceContent } from './LyvlyExpContent';
import { LyvlyTechSheet } from './LyvlyTechSheet';
import { lyvlyText } from './LyvlyText';

const Container = styled.div`
  padding: 0 ${indentSizeMobile}px;
  padding-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: ${mobileBreakPoint}px) {
    justify-content: flex-start;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    flex-direction: column;
    padding: 0 ${tabletSpaceForNavbar}px 30px ${indentSizeLaptop}px;
    height: 85vh;
    align-items: flex-end;
  }

  @media (min-width: ${laptopBreakPoint}px) {
    padding: 20px ${laptopSpaceForNavbar}px 30px ${indentSizeLaptop}px;
  }

  @media (min-width: ${desktopBreakPoint}px) {
    padding: 50px ${laptopSpaceForNavbar}px 100px ${indentSizeLaptop}px;
  }

  @media (min-height: ${ipadProHeightBreakPoint}px) {
    padding: 50px ${laptopSpaceForNavbar}px 300px ${indentSizeLaptop}px;
  }
`;

const HeadingConatiner = styled(HeadingOne)`
  width: 60%;

  @media (min-width: ${mobileBreakPoint}px) {
    padding-bottom: 0;
    margin: 0;
  }
  @media (min-width: ${laptopBreakPoint}px) {
    padding-top: 0;
    order: 1;
  }
`;

const LogoBackground = styled.a`
  padding: 8px;
  background-color: white;
  display: flex;
  margin: 20px 0;
  border-radius: 2px;

  @media (min-width: ${mobileBreakPoint}px) {
    margin: 0;
    order: 3;
    padding: 20px;
  }
  @media (min-width: ${laptopBreakPoint}px) {
    padding: 20px;
    order: 3;
    transition: background-color 0.5s ease;
    :hover {
      background-color: ${colors.blueText};
    }
  }
`;

export const LyvlyExp = () => (
  <Container>
    <HeadingConatiner>
      {lyvlyText.title.working}
      <RedText>{lyvlyText.title.lyvly}</RedText>
      <BlueText>{lyvlyText.punctuation.fullStop}</BlueText>
    </HeadingConatiner>
    <LogoBackground href="https://www.lyvly.uk/">
      <img src={LyvlyLogo} alt="Lyvly logo" width={70} height={70} />
    </LogoBackground>
    <ExperienceContent />
    <LyvlyTechSheet />
  </Container>
);

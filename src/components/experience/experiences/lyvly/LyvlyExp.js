import { colors } from 'config/colors';
import { BlueText, HeadingOne, RedText } from 'config/fontStyles';
import {
  indentSizeLaptop,
  indentSizeMobile,
  laptopSpaceForNavbar,
  mobileBreakPoint
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
    padding: 0 ${laptopSpaceForNavbar}px 30px ${indentSizeLaptop}px;
    height: 85vh;
  }
`;

const HeadingConatiner = styled(HeadingOne)`
  width: 60%;
  @media (min-width: ${mobileBreakPoint}px) {
    padding-top: 0;
    order: 1;
  }
`;

const LogoBackground = styled.a`
  width: 30%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  height: 100px;
  border-radius: 2px;

  transition: background-color 0.5s ease;
  :hover {
    background-color: ${colors.blueText};
  }

  @media (min-width: ${mobileBreakPoint}px) {
    height: 140px;
    width: 32%;
    order: 3;
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

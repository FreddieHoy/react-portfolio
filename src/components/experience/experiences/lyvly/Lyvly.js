import { BlueText, HeadingOne, RedText } from 'config/fontStyles';
import { fadeIn } from 'config/keyframes';
import {
  indentSizeMobile,
  laptopBreakPoint,
  mobileBreakPoint,
  tabletBreakPoint
} from 'config/spacing';
import React from 'react';
import LyvlyLogo from 'static/LyvlyLogo.svg';
import styled from 'styled-components';

import { LyvlyMainInfo } from './LyvlyMainInfo';
import { LyvlyRole } from './LyvlyRole';
import { LyvlyTechSheet } from './LyvlyTechSheet';
import { lyvlyText } from './LyvlyText';

const Container = styled.div`
  animation: ${fadeIn} 1s ease;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 ${indentSizeMobile}px;
  padding-bottom: 100px;

  @media (min-width: ${mobileBreakPoint}px) {
    padding: 0 ${indentSizeMobile}px 140px ${indentSizeMobile}px;
    margin: 0 auto;
    width: 500px;
  }

  @media (min-width: ${tabletBreakPoint}px) {
    padding: 50px ${indentSizeMobile}px 100px ${indentSizeMobile}px;
    width: 700px;
  }

  @media (min-width: ${laptopBreakPoint}px) {
    width: 700px;
  }
`;

const HeadingConatiner = styled(HeadingOne)`
  with: 100%;
  text-align: center;
  margin: 0 auto 20px auto;
`;

const LogoBackground = styled.a`
  margin: 30px auto;
  padding: 10px;
  width: 60%;
  background-color: white;
  display: flex;
  justify-content: center;
  border-radius: 2px;
`;

export const LyvlyExp = () => (
  <Container>
    <LogoBackground href="https://www.lyvly.uk/">
      <img src={LyvlyLogo} alt="Lyvly logo" width={60} height={60} />
    </LogoBackground>
    <HeadingConatiner>
      {lyvlyText.title.working}
      <RedText>{lyvlyText.title.lyvly}</RedText>
      <BlueText>{lyvlyText.punctuation.fullStop}</BlueText>
    </HeadingConatiner>
    <LyvlyMainInfo />
    <LyvlyRole />
    <LyvlyTechSheet />
  </Container>
);

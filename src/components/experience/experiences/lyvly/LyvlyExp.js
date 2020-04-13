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

  @media (min-width: ${mobileBreakPoint}px) {
    padding: 5% ${laptopSpaceForNavbar}px 30px ${indentSizeLaptop}px;
    height: 90vh;
  }
`;

const HeadingConatiner = styled(HeadingOne)`
  width: 60%;
  @media (min-width: ${mobileBreakPoint}px) {
    padding-top: 0;
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
`;

const ContentContainer = styled.div`
  @media (min-width: ${mobileBreakPoint}px) {
    width: 60%;
  }
`;

export const LyvlyExp = () => (
  <Container>
    <HeadingConatiner>
      <HeadingOne>
        {lyvlyText.title.working}
        <RedText>{lyvlyText.title.lyvly}</RedText>
        <BlueText>{lyvlyText.punctuation.fullStop}</BlueText>
      </HeadingOne>
      <LogoBackground href="https://www.lyvly.uk/">
        <img src={LyvlyLogo} alt="Lyvly logo" width={70} height={70} />
      </LogoBackground>
    </HeadingConatiner>
    <ContentContainer>
      <ExperienceContent />
      <LyvlyTechSheet />
    </ContentContainer>
  </Container>
);

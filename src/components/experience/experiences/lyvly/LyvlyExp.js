import { colors } from 'config/colors';
import { BlueText, HeadingOne, RedText } from 'config/fontStyles';
import { indentSizeMobile } from 'config/spacing';
import React from 'react';
import LyvlyLogo from 'static/LyvlyLogo.svg';
import styled from 'styled-components';

import { ExperienceContent } from './LyvlyExpContent';
import { LyvlyTechSheet } from './LyvlyTechSheet';

const Container = styled.div`
  padding: 0 ${indentSizeMobile}px;
  padding-bottom: 100px;

  @media (min-width: ${mobileBreakPoint}px) {
    width: 80%;
  }
`;

const HeadingConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
`;

const LogoBackground = styled.a`
  background-color: white;
  transition: background-color 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  height: 100px;
  border-radius: 2px;
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
        Working at
        <RedText> Lyvly</RedText>
        <BlueText>.</BlueText>
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

import { Container } from 'components/common/Container';
import { colors } from 'config/colors';
import { BlueText, HeadingOne, RedText } from 'config/fontStyles';
import { tabletBreakPoint } from 'config/spacing';
import React from 'react';
import LyvlyLogo from 'static/LyvlyLogo.svg';
import styled from 'styled-components';

import { LyvlyMainInfo } from './LyvlyMainInfo';
import { LyvlyRole } from './LyvlyRole';
import { LyvlyTechSheet } from './LyvlyTechSheet';
import { lyvlyText } from './LyvlyText';

const HeadingConatiner = styled(HeadingOne)`
  with: 100%;
  text-align: center;
  margin: 0 auto 20px auto;
`;

const LogoBackground = styled.a`
  margin: 10px auto 30px auto;
  padding: 10px;
  width: 70%;
  background-color: white;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  @media (min-width: ${tabletBreakPoint}px) {
    transition: background-color 0.4s ease;
    :hover {
      background-color: ${colors.lightBlueText};
    }
  }
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

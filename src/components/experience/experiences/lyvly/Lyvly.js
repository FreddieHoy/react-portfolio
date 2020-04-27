import { Container } from 'components/common/Container';
import { colors } from 'config/colors';
import { BlueText, HeadingOne, HeadingTwo, RedText } from 'config/fontStyles';
import { tabletBreakPoint } from 'config/spacing';
import React from 'react';
import LyvlyLogo from 'static/LyvlyLogo.svg';
import LyvlyTeam from 'static/LyvlyTeam.jpg';
import styled from 'styled-components';

import { LyvlyHeader } from './LyvlyHeader';
import { LyvlyMainInfo } from './LyvlyMainInfo';
import { LyvlyRole } from './LyvlyRole';
import { LyvlyTechSheet } from './LyvlyTechSheet';

const LogoBackground = styled.a`
  margin: 20px 0;
  padding: 20px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  @media (min-width: ${tabletBreakPoint}px) {
    padding: 30px;
    transition: background-color 0.4s ease;
    :hover {
      background-color: ${colors.lightBlueText};
    }
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  margin: 20px 0;
`;

export const LyvlyExp = () => (
  <Container>
    <LyvlyHeader />
    <LyvlyMainInfo />
    <StyledImage src={LyvlyTeam} alt="Lyvly logo" />
    <LyvlyRole />
    <LogoBackground
      href="https://www.lyvly.uk/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={LyvlyLogo} alt="Lyvly logo" width={60} height={60} />
    </LogoBackground>
    <LyvlyTechSheet />
  </Container>
);

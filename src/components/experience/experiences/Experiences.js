import { fadeIn } from 'config/keyframes';
import { laptopBreakPoint, mobileBreakPoint } from 'config/spacing';
import React from 'react';
import GeneralAssemblyLogo from 'static/GeneralAssemblyLogo.svg';
import LyvlyLogo from 'static/LyvlyLogo.svg';
import styled from 'styled-components';

import { ExperienceItem } from './ExperienceItem';

const Container = styled.div`
  animation: ${fadeIn} 1s ease;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;

  @media (min-width: ${mobileBreakPoint}px) {
    width: 100%;
    align-items: start;
  }
  @media (min-width: ${laptopBreakPoint}px) {
  }
`;

export const Experiences = () => (
  <Container>
    <ExperienceItem
      src={LyvlyLogo}
      alt="Lyvly logo"
      height={70}
      width={70}
      backgroundColor="white"
      url="lyvly"
    />
    <ExperienceItem
      src={GeneralAssemblyLogo}
      alt="General Assembly logo"
      height={30}
      width={260}
      backgroundColor="black"
      url="generalassembly"
    />
  </Container>
);

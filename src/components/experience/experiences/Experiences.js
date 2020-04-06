import React from 'react';
import GeneralAssemblyLogo from 'static/GeneralAssemblyLogo.svg';
import LyvlyLogo from 'static/LyvlyLogo.svg';
import styled from 'styled-components';

import { ExperienceItem } from './ExperienceItem';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      height={28.75}
      width={260}
      backgroundColor="black"
      url="generalassembly"
    />
  </Container>
);

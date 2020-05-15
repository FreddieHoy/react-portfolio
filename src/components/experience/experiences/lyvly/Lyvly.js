import { Container } from 'components/common/Container';
import React from 'react';
import LyvlyHomePage from 'static/LyvlyHomePage.png';
import LyvlyTeam from 'static/LyvlyTeam.jpg';
import styled from 'styled-components';

import { LyvlyHeader } from './LyvlyHeader';
import { LyvlyMainInfo } from './LyvlyMainInfo';
import { LyvlyRole } from './LyvlyRole';
import { LyvlyTechSheet } from './LyvlyTechSheet';

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
    <StyledImage src={LyvlyHomePage} alt="Lyvly website home page" />
    <LyvlyTechSheet />
  </Container>
);

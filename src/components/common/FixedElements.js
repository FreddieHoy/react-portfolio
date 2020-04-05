import { NameTitle, StyledLink } from 'config/fontStyles';
import { indentSizeLaptop, indentSizeMobile } from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

import NavBar from './NavBar';

const TitleContainer = styled.div`
  position: fixed;
  left: ${indentSizeMobile}px;
  padding: ${indentSizeMobile}px 0;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;

  @media (min-width: 641px) {
    left: ${indentSizeLaptop}px;
    padding: ${indentSizeLaptop}px 0;
  }
`;

export const FixedElements = () => (
  <div>
    <TitleContainer>
      <StyledLink to="/home">
        <NameTitle>FREDDIE</NameTitle>
        <NameTitle>HOY</NameTitle>
      </StyledLink>
      <div>
        <a href="www.google.com">EMAIL ME</a>
      </div>
    </TitleContainer>
    <NavBar />
  </div>
);

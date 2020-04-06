import { NameTitle } from 'config/fontStyles';
import { indentSizeLaptop, indentSizeMobile } from 'config/spacing';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ContactLinks } from './ContactLinks';
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

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const FixedElements = () => (
  <div>
    <TitleContainer>
      <StyledLink to="/home">
        <NameTitle>
          FREDDIE
          <br />
          HOY
        </NameTitle>
      </StyledLink>
      <div>
        <ContactLinks />
      </div>
    </TitleContainer>
    <NavBar />
  </div>
);

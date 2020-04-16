import { NameTitle } from 'config/fontStyles';
import {
  indentSizeLaptop,
  indentSizeMobile,
  laptopBreakPoint,
  mobileBreakPoint
} from 'config/spacing';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { nameHeadingText } from './CommonText';

const TitleContainer = styled.div`
  padding: ${indentSizeMobile}px;
  width: 50%;
  display: flex;
  justify-content: space-between;

  @media (min-width: ${mobileBreakPoint}px) {
    padding: ${indentSizeLaptop}px;
  }

  @media (min-width: ${laptopBreakPoint}px) {
    position: fixed;
    top: 0;
    left: 0;
    padding: ${indentSizeLaptop}px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const NameHeading = () => (
  <TitleContainer>
    <StyledLink to="/home">
      <NameTitle>
        {nameHeadingText.freddie}
        <br />
        {nameHeadingText.hoy}
      </NameTitle>
    </StyledLink>
  </TitleContainer>
);

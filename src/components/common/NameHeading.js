import { NameTitle } from 'config/fontStyles';
import {
  indentSizeLaptop,
  indentSizeMobile,
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

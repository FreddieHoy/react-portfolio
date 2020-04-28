import { NameTitle, StyledAnchor } from 'config/fontStyles';
import { fadeInRight } from 'config/keyframes';
import {
  indentSizeLaptop,
  indentSizeMobile,
  laptopBreakPoint,
  mobileBreakPoint
} from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

import { nameHeadingText } from './CommonText';

const TitleContainer = styled.div`
  animation: ${fadeInRight} 0.2s ease-in;
  animation-delay: 2.5s;
  animation-fill-mode: both;
  padding: ${indentSizeMobile}px;
  width: 30%;
  display: flex;
  justify-content: space-between;

  @media (min-width: ${mobileBreakPoint}px) {
    padding: ${indentSizeLaptop}px 0 0 ${indentSizeLaptop}px;
  }

  @media (min-width: ${laptopBreakPoint}px) {
    position: fixed;
    top: 0;
    left: 0;
    padding: ${indentSizeLaptop}px 0 0 ${indentSizeLaptop}px;
  }
`;

export const NameHeading = () => (
  <TitleContainer>
    <StyledAnchor href="https://freddiehoy.com">
      <NameTitle>
        {nameHeadingText.freddie}
        <br />
        {nameHeadingText.hoy}
      </NameTitle>
    </StyledAnchor>
  </TitleContainer>
);

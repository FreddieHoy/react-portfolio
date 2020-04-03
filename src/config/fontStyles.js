import React from 'react';
import styled from 'styled-components';

import { colors } from './colors';

export const NameTitle = styled.h1`
  font-family: 'Courier New', Courier, monospace;
  font-size: 28px;
  font-weight: 100;
  letter-spacing: 10px;
  margin: 0;
  color: ${colors.whiteText};
`;

export const NavWhite = styled.h2`
  font-family: 'Sen', sans-serif;
  color: white;
  font-size: 24px;
  margin: 0;

  :hover {
    color: ${colors.redText};
    cursor: pointer;
  }
`;

export const TitleTagWord = ({ color, text, endSpace }) => {
  const TagWord = styled.div`
    color: ${color};
    font-family: 'Sen', sans-serif;
    font-size: 44px;
    padding-right: ${endSpace ? '12px' : '0'};
  `;
  return <TagWord>{text}</TagWord>;
};

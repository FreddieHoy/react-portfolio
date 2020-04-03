import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from './colors';

export const NameTitle = styled.h1`
  font-family: 'Courier New', Courier, monospace;
  font-size: 24px;
  font-weight: 100;
  letter-spacing: 10px;
  margin: 0;
  color: ${colors.whiteText};
  :hover {
    color: ${colors.redText};
    cursor: pointer;
  }
`;

export const NavWhite = styled.h2`
  font-family: 'Sen', sans-serif;
  color: white;
  font-size: 22px;
  margin: 0;
  text-decoration: none;
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

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

import { mobileBreakPoint } from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

import { colors } from './colors';

export const NameTitle = styled.h1`
  font-family: 'Courier New', Courier, monospace;
  font-size: 18px;
  font-weight: 100;
  letter-spacing: 10px;
  margin: 0;
  color: ${colors.whiteText};
  transition: color 0.3s ease;
  :hover {
    color: ${colors.redText};
    cursor: pointer;
  }

  @media (min-width: ${mobileBreakPoint}px) {
    font-size: 24px;
  }
`;

export const NavWhite = styled.h2`
  font-family: 'Sen', sans-serif;
  color: white;
  font-size: 16px;
  margin: 0;
  text-decoration: none;
  padding-bottom: 4px;
  transition: color 0.2s ease;
  :hover {
    color: ${colors.redText};
    cursor: pointer;
  }

  @media (min-width: ${mobileBreakPoint}px) {
    font-size: 22px;
    padding-bottom: none;
  }
`;

export const TitleTagWord = ({ color, text, endSpace }) => {
  const TagWord = styled.div`
    color: ${color};
    font-family: 'Sen', sans-serif;
    font-size: 36px;
    font-weight: 700;
    padding-right: ${endSpace ? '12px' : '0'};
    @media (min-width: ${mobileBreakPoint}px) {
      font-size: 46px;
    }
  `;
  return <TagWord>{text}</TagWord>;
};

export const StyledAnchor = styled.a`
  text-decoration: none;
  color: ${colors.lightBlueText};
  :hover {
    color: ${colors.blueText};
    cursor: pointer;
  }
`;

export const HeadingOne = styled.h3`
  color: ${colors.whiteText};
  font-family: 'Sen', sans-serif;
  font-size: 34px;
  margin: 10px 0;
`;

export const HeadingTwo = styled.h3`
  color: ${colors.whiteText};
  font-family: 'Sen', sans-serif;
  font-size: 22px;
  margin: 10px 0;
`;

export const RedText = styled.span`
  color: ${colors.redText};
`;

export const BlueText = styled.span`
  color: ${colors.blueText};
`;

export const LightBlueText = styled.span`
  color: ${colors.lightBlueText};
`;

export const Paragraph = styled.p`
  color: ${colors.whiteText};
  font-family: 'Sen', sans-serif;
  font-weight: 400;
`;

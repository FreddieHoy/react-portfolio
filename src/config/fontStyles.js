import { mobileBreakPoint } from 'config/spacing';
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
  color: ${colors.whiteText};
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

export const MessageBlue = styled.p`
  font-family: 'Sen', sans-serif;
  color: ${colors.lightBlueText};
`;

export const StyledAnchor = styled.a`
  text-decoration: none;
  color: ${colors.lightBlueText};
  :hover {
    color: ${colors.blueText};
    cursor: pointer;
  }
`;

export const HeadingOne = styled.h1`
  color: ${colors.whiteText};
  font-family: 'Sen', sans-serif;
  font-size: 50px;
  margin: 10px 0;
`;

export const HeadingTwo = styled.h2`
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

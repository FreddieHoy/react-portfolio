import { colors } from 'config/colors';
import { BlueText, HeadingOne, RedText } from 'config/fontStyles';
import {
  indentSizeLaptop,
  indentSizeMobile,
  laptopSpaceForNavbar,
  mobileBreakPoint
} from 'config/spacing';
import React from 'react';
import GeneralAssemblyLogoNoWords from 'static/GeneralAssemblyLogoNoWords.png';
import styled from 'styled-components';

import { GAContentMain, GAContentProject } from './GAExpContent';
import { GAMainText, GAProjectText } from './GAText';

const Container = styled.div`
  padding: 20px ${indentSizeMobile}px;
  padding-bottom: 100px;

  @media (min-width: ${mobileBreakPoint}px) {
    padding: 20px ${laptopSpaceForNavbar}px 100px ${indentSizeLaptop}px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const HeadingContainer = styled(HeadingOne)`
  width: 60%;
  order: 1;
`;

const LogoBackground = styled.a`
  background-color: black;
  transition: background-color 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 14px;
  height: 200px;
  border-radius: 2px;
  :hover {
    background-color: ${colors.blueText};
  }
  @media (min-width: ${mobileBreakPoint}px) {
    width: 34%;
    order: 3;
  }
`;

export const GAExp = () => (
  <Container>
    <HeadingContainer>
      {GAMainText.title.study}
      <RedText>{GAMainText.title.london}</RedText>
      <BlueText>{GAMainText.punctuation.fullStop}</BlueText>
    </HeadingContainer>
    <LogoBackground href="https://generalassemb.ly/">
      <img
        src={GeneralAssemblyLogoNoWords}
        alt="Lyvly logo"
        width={70}
        height={70}
      />
    </LogoBackground>
    <GAContentMain />
    {GAProjectText.map((project) => (
      <GAContentProject project={project} key={project.title} />
    ))}
  </Container>
);

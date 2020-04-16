import { colors } from 'config/colors';
import { BlueText, HeadingOne, RedText } from 'config/fontStyles';
import { fadeIn } from 'config/keyframes';
import {
  indentSizeLaptop,
  indentSizeMobile,
  laptopBreakPoint,
  laptopSpaceForNavbar,
  mobileBreakPoint
} from 'config/spacing';
import React from 'react';
import GeneralAssemblyLogoNoWords from 'static/GeneralAssemblyLogoNoWords.png';
import styled from 'styled-components';

import { GAContentMain } from './GAExpContent';
import { GAContentProject } from './GAExpProject';
import { GAMainText, GAProjectText } from './GAText';

const Container = styled.div`
  animation: ${fadeIn} 1s ease;
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
  width: 100%;
  order: 1;
  @media (min-width: ${mobileBreakPoint}px) {
    font-size: 30px;
    width: 60%;
  }
  @media (min-width: ${laptopBreakPoint}px) {
    font-size: 34px;
  }
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
    width: 24%;
    order: 3;
    height: 120px;
  }
  @media (min-width: ${laptopBreakPoint}px) {
    padding: 20px;
    order: 3;
    transition: background-color 0.5s ease;
    width: 35%;
    :hover {
      background-color: ${colors.blueText};
    }
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
    {GAProjectText.projectInfoArray.map((project) => (
      <GAContentProject project={project} key={project.title} />
    ))}
  </Container>
);

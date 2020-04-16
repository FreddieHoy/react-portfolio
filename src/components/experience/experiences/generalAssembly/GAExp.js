import { colors } from 'config/colors';
import { BlueText, HeadingOne, RedText } from 'config/fontStyles';
import { fadeIn } from 'config/keyframes';
import {
  indentSizeLaptop,
  indentSizeMobile,
  laptopBreakPoint,
  mobileBreakPoint,
  tabletBreakPoint
} from 'config/spacing';
import React from 'react';
import GALogoNoWords from 'static/GALogoNoWords.png';
import styled from 'styled-components';

import { GAContentMain } from './GAExpContent';
import { GAContentProject } from './GAExpProject';
import { GAMainText, GAProjectText } from './GAText';

const Container = styled.div`
  animation: ${fadeIn} 1s ease;
  padding: 20px ${indentSizeMobile}px;
  padding-bottom: 100px;

  @media (min-width: ${mobileBreakPoint}px) {
    padding: 0 0 140px 0;
    margin: 0 auto;
    width: 500px;
  }

  @media (min-width: ${tabletBreakPoint}px) {
    padding: ${indentSizeLaptop}px 0 100px 0;
    width: 660px;
  }

  @media (min-width: ${laptopBreakPoint}px) {
  }
`;

const HeadingContainer = styled(HeadingOne)`
  with: 100%;
  text-align: center;
  margin: 0 auto 20px auto;
`;

const LogoBackground = styled.a`
  margin: 10px auto 30px auto;
  padding: 20px;
  width: 60%;
  background-color: black;
  display: flex;
  justify-content: center;
  border-radius: 2px;
  @media (min-width: ${tabletBreakPoint}px) {
    transition: background-color 0.4s ease;
    :hover {
      background-color: ${colors.lightBlueText};
    }
  }
`;

export const GAExp = () => (
  <Container>
    <LogoBackground href="https://generalassemb.ly/">
      <img src={GALogoNoWords} alt="GA logo" width={70} height={70} />
    </LogoBackground>
    <HeadingContainer>
      {GAMainText.title.study}
      <RedText>{GAMainText.title.london}</RedText>
      <BlueText>{GAMainText.punctuation.fullStop}</BlueText>
    </HeadingContainer>
    <GAContentMain />
    {GAProjectText.projectInfoArray.map((project) => (
      <GAContentProject project={project} key={project.title} />
    ))}
  </Container>
);

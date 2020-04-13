import { colors } from 'config/colors';
import { BlueText, HeadingOne, RedText } from 'config/fontStyles';
import { indentSizeMobile, mobileBreakPoint } from 'config/spacing';
import React from 'react';
import GeneralAssemblyLogoNoWords from 'static/GeneralAssemblyLogoNoWords.png';
import styled from 'styled-components';

import { GAContentMain, GAContentProject } from './GAExpContent';
import { GAMainText, GAProjectText } from './GAText';

const Container = styled.div`
  padding: 20px ${indentSizeMobile}px;
  padding-bottom: 100px;

  @media (min-width: ${mobileBreakPoint}px) {
    width: 80%;
  }
`;

const HeadingConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;

const LogoBackground = styled.a`
  background-color: black;
  transition: background-color 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 14px;
  height: 100px;
  border-radius: 2px;
  :hover {
    background-color: ${colors.blueText};
  }
`;

export const GAExp = () => (
  <Container>
    <HeadingConatiner>
      <HeadingOne>
        {GAMainText.title.study}
        <RedText>{GAMainText.title.london}</RedText>
        <BlueText>{GAMainText.punctuation.fullStop}</BlueText>
      </HeadingOne>
      <LogoBackground href="https://generalassemb.ly/">
        <img
          src={GeneralAssemblyLogoNoWords}
          alt="Lyvly logo"
          width={70}
          height={70}
        />
      </LogoBackground>
    </HeadingConatiner>
    <GAContentMain />
    {GAProjectText.map((project) => (
      <GAContentProject project={project} key={project.title} />
    ))}
  </Container>
);

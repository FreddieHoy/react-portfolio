import { colors } from 'config/colors';
import { BlueText, HeadingOne, RedText } from 'config/fontStyles';
import { indentSizeMobile } from 'config/spacing';
import React from 'react';
import GeneralAssemblyLogoNoWords from 'static/GeneralAssemblyLogoNoWords.png';
import styled from 'styled-components';

import { GAContentMain, GAContentProject } from './GAExpContent';

const Container = styled.div`
  padding: 0 ${indentSizeMobile}px;
  padding-bottom: 100px;

  @media (min-width: 641px) {
    width: 80%;
  }
`;

const HeadingConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
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
        Studying at
        <RedText> GA London</RedText>
        <BlueText>.</BlueText>
      </HeadingOne>
      <LogoBackground href="https://www.lyvly.uk/">
        <img
          src={GeneralAssemblyLogoNoWords}
          alt="Lyvly logo"
          width={70}
          height={70}
        />
      </LogoBackground>
    </HeadingConatiner>
    <GAContentMain />
    <GAContentProject />
  </Container>
);

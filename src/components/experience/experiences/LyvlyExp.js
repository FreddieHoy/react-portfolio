import { colors } from 'config/colors';
import { BlueText, HeadingOne, Paragraph, RedText } from 'config/fontStyles';
import { mobileSpaceForHeading } from 'config/spacing';
import React from 'react';
import LyvlyLogo from 'static/LyvlyLogo.svg';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: ${mobileSpaceForHeading}px 0;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 20%;
`;

const LogoBackground = styled.a`
  background-color: white;
  transition: background-color 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  border-radius: 2px;
  :hover {
    background-color: ${colors.blueText};
  }
`;

export const LyvlyExp = () => (
  <Container>
    <LogoContainer>
      <LogoBackground href="https://www.lyvly.uk/">
        <img src={LyvlyLogo} alt="Lyvly logo" width={70} height={70} />
      </LogoBackground>
    </LogoContainer>
    <HeadingOne>
      Working at
      <RedText> Lyvly</RedText>
      <BlueText>.</BlueText>
    </HeadingOne>
    <Paragraph>
      {"Here's some useful information to help get me a job."}
    </Paragraph>
  </Container>
);

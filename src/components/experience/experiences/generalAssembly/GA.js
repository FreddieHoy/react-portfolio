import { Container } from 'components/common/Container';
import { colors } from 'config/colors';
import { BlueText, HeadingOne, RedText } from 'config/fontStyles';
import { tabletBreakPoint } from 'config/spacing';
import React from 'react';
import GALogoNoWords from 'static/GALogoNoWords.png';
import styled from 'styled-components';

import { GAContentMain } from './GAContent';
import { GAProject } from './GAProject';
import { GAMainText, GAProjectText } from './GAText';

const HeadingContainer = styled(HeadingOne)`
  with: 100%;
  text-align: center;
  margin: 0 auto 20px auto;
`;

const LogoBackground = styled.a`
  margin: 10px auto 30px auto;
  padding: 10px;
  width: 70%;
  background-color: black;
  display: flex;
  justify-content: center;
  border-radius: 4px;
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
      <GAProject project={project} key={project.title} />
    ))}
  </Container>
);

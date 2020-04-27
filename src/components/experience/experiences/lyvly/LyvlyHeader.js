import { BackArrow } from 'components/common/BackArrow';
import { BlueText, HeadingOne, RedText } from 'config/fontStyles';
import React from 'react';
import styled from 'styled-components';

import { lyvlyText } from './LyvlyText';

const Container = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const HeadingConatiner = styled(HeadingOne)`
  with: 100%;
  text-align: center;
  margin: 20px auto;
`;

export const LyvlyHeader = () => (
  <Container>
    <BackArrow toPage="/experience" />
    <HeadingConatiner>
      {lyvlyText.title.working}
      <RedText>{lyvlyText.title.lyvly}</RedText>
      <BlueText>{lyvlyText.punctuation.fullStop}</BlueText>
    </HeadingConatiner>
  </Container>
);

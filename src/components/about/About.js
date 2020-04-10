import { indentSizeMobile } from 'config/spacing';
import React from 'react';
import HeadShot from 'static/HeadShot.jpg';
import styled from 'styled-components';

import {
  AboutContentContact,
  AboutContentInterests,
  AboutContentMain
} from './AboutContent';
import { AboutTag } from './AboutTag';

const Container = styled.div`
  padding: 30px ${indentSizeMobile}px 60px ${indentSizeMobile}px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  padding: 26px 0;
`;

export const About = () => (
  <Container>
    <AboutTag />
    <AboutContentMain />
    <Image src={HeadShot} alt="Head Shot of Freddie Hoy" />
    <AboutContentContact />
    <AboutContentInterests />
  </Container>
);

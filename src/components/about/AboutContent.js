import {
  HeadingTwo,
  Paragraph,
  RedText,
  StyledAnchor
} from 'config/fontStyles';
import React from 'react';
import styled from 'styled-components';

import {
  AboutTextContact,
  AboutTextInterests,
  AboutTextMain
} from './AboutText';

const Container = styled.div`
  padding: 10px 0;
`;

export const AboutContentMain = () => (
  <Container>
    <HeadingTwo>
      {AboutTextMain.bigText.hello}
      <RedText>{AboutTextMain.bigText.fred}</RedText>
    </HeadingTwo>
    <HeadingTwo>
      {AboutTextMain.bigText.am}
      <RedText>{AboutTextMain.bigText.engineer}</RedText>
      {AboutTextMain.bigText.living}
    </HeadingTwo>
    <Paragraph>
      {AboutTextMain.studied.nottingham}
      <RedText>{AboutTextMain.studied.bootcamp}</RedText>
      {AboutTextMain.studied.ga}
    </Paragraph>
  </Container>
);

export const AboutContentContact = () => (
  <Container>
    <HeadingTwo>{AboutTextContact.title}</HeadingTwo>
    <Paragraph>
      {AboutTextContact.email.email}
      <StyledAnchor href="mailto: freddiehoy0@gmail.com">
        {AboutTextContact.email.address}
      </StyledAnchor>
    </Paragraph>
    <Paragraph>
      {AboutTextContact.github.github}
      <StyledAnchor href="https://github.com/FreddieHoy">
        {AboutTextContact.github.path}
      </StyledAnchor>
    </Paragraph>
    <Paragraph>
      {AboutTextContact.linkedIn.linkedIn}
      <StyledAnchor href="https://www.linkedin.com/in/freddie-hoy/">
        {AboutTextContact.linkedIn.path}
      </StyledAnchor>
    </Paragraph>
  </Container>
);

export const AboutContentInterests = () => (
  <Container>
    <HeadingTwo>{AboutTextInterests.title}</HeadingTwo>
    <Paragraph>{AboutTextInterests.cycling.leMed}</Paragraph>
    <Paragraph>
      {AboutTextInterests.cycling.just}
      <StyledAnchor href="https://www.justgiving.com/fundraising/cyclelemedntob">
        {AboutTextInterests.cycling.path}
      </StyledAnchor>
    </Paragraph>
    <Paragraph>{AboutTextInterests.hockey}</Paragraph>
    <Paragraph>{AboutTextInterests.football}</Paragraph>
    <Paragraph>{AboutTextInterests.ski}</Paragraph>
    <Paragraph>{AboutTextInterests.diving}</Paragraph>
    <Paragraph>{AboutTextInterests.guitar}</Paragraph>
  </Container>
);

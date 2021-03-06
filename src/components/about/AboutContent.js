import {
  HeadingTwo,
  Paragraph,
  RedText,
  StyledAnchor
} from 'config/fontStyles';
import { mobileBreakPoint } from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

import {
  AboutTextContact,
  AboutTextInterests,
  AboutTextMain
} from './AboutText';

const MainContainer = styled.div`
  padding: 10px 0;

  @media (min-width: ${mobileBreakPoint}px) {
    padding: 0;
  }
`;

const ContactContainer = styled.div`
  padding: 10px 0;
  @media (min-width: ${mobileBreakPoint}px) {
    margin: auto;
  }
`;

const InterestsContainer = styled.div`
  padding: 10px 0;

  @media (min-width: ${mobileBreakPoint}px) {
  }
`;

const ListItems = styled(Paragraph)`
  margin: 5px 0;
`;

export const AboutContentMain = () => (
  <MainContainer>
    <HeadingTwo>
      {AboutTextMain.bigText.hello}
      <RedText>{AboutTextMain.bigText.fred}</RedText>
    </HeadingTwo>
    <HeadingTwo>
      {AboutTextMain.bigText.am}
      <RedText>{AboutTextMain.bigText.engineer}</RedText>
      {AboutTextMain.bigText.living}
    </HeadingTwo>
    <Paragraph>{AboutTextMain.studied}</Paragraph>
  </MainContainer>
);

export const AboutContentContact = () => (
  <ContactContainer>
    <HeadingTwo>{AboutTextContact.title}</HeadingTwo>
    <ListItems>
      {AboutTextContact.email.title}
      <StyledAnchor
        href="mailto: freddiehoy0@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        {AboutTextContact.email.address}
      </StyledAnchor>
    </ListItems>
    <ListItems>
      {AboutTextContact.github.title}
      <StyledAnchor
        href="https://github.com/FreddieHoy"
        target="_blank"
        rel="noopener noreferrer"
      >
        {AboutTextContact.github.path}
      </StyledAnchor>
    </ListItems>
    <ListItems>
      {AboutTextContact.linkedIn.title}
      <StyledAnchor
        href="https://www.linkedin.com/in/freddie-hoy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {AboutTextContact.linkedIn.path}
      </StyledAnchor>
    </ListItems>
  </ContactContainer>
);

export const AboutContentInterests = () => (
  <InterestsContainer>
    <HeadingTwo>{AboutTextInterests.title}</HeadingTwo>
    <Paragraph>{AboutTextInterests.cycling.leMed}</Paragraph>
    <Paragraph>
      {AboutTextInterests.cycling.just}
      <StyledAnchor
        href="https://www.justgiving.com/fundraising/cyclelemedntob"
        target="_blank"
        rel="noopener noreferrer"
      >
        {AboutTextInterests.cycling.path}
      </StyledAnchor>
    </Paragraph>
    <ListItems>{AboutTextInterests.hockey}</ListItems>
    <ListItems>{AboutTextInterests.football}</ListItems>
    <ListItems>{AboutTextInterests.ski}</ListItems>
    <ListItems>{AboutTextInterests.guitar}</ListItems>
  </InterestsContainer>
);

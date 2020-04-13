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

const MainContainer = styled.div`
  padding: 10px 0;
  @media (min-width: 641px) {
    width: 60%;
    padding: 0;
  }
`;

const ContactContainer = styled.div`
  padding: 10px 0;
  @media (min-width: 641px) {
    width: 30%;
    order: 4;
    padding: 0;
  }
`;

const InterestsContainer = styled.div`
  padding: 10px 0;
  @media (min-width: 641px) {
    width: 60%;
    padding: 0;
  }
`;

const ListItems = styled(Paragraph)`
  margin: 0;
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
    <Paragraph>
      {AboutTextMain.studied.nottingham}
      <RedText>{AboutTextMain.studied.bootcamp}</RedText>
      {AboutTextMain.studied.ga}
    </Paragraph>
  </MainContainer>
);

export const AboutContentContact = () => (
  <ContactContainer>
    <HeadingTwo>{AboutTextContact.title}</HeadingTwo>
    <ListItems>
      {AboutTextContact.email.email}
      <StyledAnchor href="mailto: freddiehoy0@gmail.com">
        {AboutTextContact.email.address}
      </StyledAnchor>
    </ListItems>
    <ListItems>
      {AboutTextContact.github.github}
      <StyledAnchor href="https://github.com/FreddieHoy">
        {AboutTextContact.github.path}
      </StyledAnchor>
    </ListItems>
    <ListItems>
      {AboutTextContact.linkedIn.linkedIn}
      <StyledAnchor href="https://www.linkedin.com/in/freddie-hoy/">
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
      <StyledAnchor href="https://www.justgiving.com/fundraising/cyclelemedntob">
        {AboutTextInterests.cycling.path}
      </StyledAnchor>
    </Paragraph>
    <ListItems>{AboutTextInterests.hockey}</ListItems>
    <ListItems>{AboutTextInterests.football}</ListItems>
    <ListItems>{AboutTextInterests.ski}</ListItems>
    <ListItems>{AboutTextInterests.diving}</ListItems>
    <ListItems>{AboutTextInterests.guitar}</ListItems>
  </InterestsContainer>
);

import { colors } from 'config/colors';
import {
  indentSizeLaptop,
  indentSizeMobile,
  mobileBreakPoint
} from 'config/spacing';
import React from 'react';
import EmailIcon from 'static/EmailIcon.svg';
import GitHubIconlIcon from 'static/GitHubIcon.svg';
import LinkedInIcon from 'static/LinkedinIcon.svg';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  left: ${indentSizeMobile}px;
  bottom: ${indentSizeMobile}px;
  background-color: ${colors.backgroundTwo};
  padding: 5px 5px 0 5px;
  border: 1px solid black;
  border-radius: 4px;
  @media (min-width: ${mobileBreakPoint}px) {
    left: ${indentSizeLaptop}px;
    bottom: ${indentSizeLaptop}px;
  }
`;

const ContactButton = styled.img`
  transition: background-color 0.5s ease;
  padding: 2px;
  :hover {
    background-color: ${colors.lightBlueText};
    cursor: pointer;
  }
`;

export const ContactLinks = () => (
  <Container>
    <a
      href="mailto: freddiehoy0@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ContactButton src={EmailIcon} alt="Email Icon" height={40} width={40} />
    </a>
    <a
      href="https://github.com/FreddieHoy"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ContactButton
        src={GitHubIconlIcon}
        alt="GitHub Icon"
        height={40}
        width={40}
      />
    </a>

    <a
      href="https://www.linkedin.com/in/freddie-hoy/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ContactButton
        src={LinkedInIcon}
        alt="LinkedIn Icon"
        height={40}
        width={40}
      />
    </a>
  </Container>
);

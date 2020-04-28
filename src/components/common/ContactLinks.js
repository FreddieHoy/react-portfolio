import { colors } from 'config/colors';
import { fadeInRight } from 'config/keyframes';
import {
  indentSizeLaptop,
  indentSizeMobile,
  mobileBreakPoint
} from 'config/spacing';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  animation: ${fadeInRight} 0.5s ease-in;
  animation-delay: 4.5s;
  animation-fill-mode: both;
  position: fixed;
  left: ${indentSizeMobile}px;
  bottom: ${indentSizeMobile}px;
  background-color: ${colors.backgroundThree};
  padding: 5px 5px 0 5px;
  border: 1px solid ${colors.black};
  border-radius: 4px;
  @media (min-width: ${mobileBreakPoint}px) {
    left: ${indentSizeLaptop}px;
    bottom: ${indentSizeLaptop}px;
  }
`;

const ContactIconWrapper = styled.a`
  color: ${colors.black};
  font-size: 40px;
  margin: 4px;
  padding: 0;
  transition: color 0.4s ease;
  :hover {
    color: ${colors.redText};
  }
`;

export const ContactLinks = () => (
  <Container>
    <ContactIconWrapper
      href="mailto: freddiehoy0@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fas fa-envelope-square" />
    </ContactIconWrapper>
    <ContactIconWrapper
      href="https://github.com/FreddieHoy"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-github-square" />
    </ContactIconWrapper>
    <ContactIconWrapper
      href="https://www.linkedin.com/in/freddie-hoy/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-linkedin" />
    </ContactIconWrapper>
  </Container>
);

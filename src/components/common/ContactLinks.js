import { colors } from 'config/colors';
import React from 'react';
import EmailIcon from 'static/EmailIcon.svg';
import GitHubIconlIcon from 'static/GitHubIcon.svg';
import LinkedInIcon from 'static/LinkedinIcon.svg';
import styled from 'styled-components';

const ContactButton = styled.img`
  transition: background-color 0.5s ease;
  :hover {
    background-color: ${colors.blueText};
    cursor: pointer;
  }
`;

export const ContactLinks = () => (
  <div>
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
  </div>
);

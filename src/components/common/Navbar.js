import { colors } from 'config/colors';
import { NavWhite, StyledAnchor } from 'config/fontStyles';
import {
  indentSizeLaptop,
  indentSizeMobile,
  mobileBreakPoint,
  tabletBreakPoint
} from 'config/spacing';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { navBarText } from './CommonText';

const NavContainer = styled.div`
  border-left: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: right;
  padding: ${indentSizeMobile}px;

  @media (min-width: ${mobileBreakPoint}px) {
    padding: ${indentSizeLaptop}px;
  }

  @media (min-width: ${tabletBreakPoint}px) {
    width: 150px;
    background: ${colors.backgroundTwo};
    text-align: left;
    position: fixed;
    right: 0;
    padding-left: 40px;
    height: 100vh;
    justify-content: space-between;
    border-left: 1px solid ${colors.borderWhite};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const NavBar = () => (
  <NavContainer>
    <StyledLink to="/experience">
      <NavWhite>{navBarText.experience}</NavWhite>
    </StyledLink>
    <StyledLink to="/about">
      <NavWhite>{navBarText.about}</NavWhite>
    </StyledLink>
    <StyledAnchor
      href="https://freddiehoy.github.io/Unbeatable-TicTacToe/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <NavWhite>{navBarText.game}</NavWhite>
    </StyledAnchor>
  </NavContainer>
);

export default withRouter(NavBar);

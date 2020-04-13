import { colors } from 'config/colors';
import { NavWhite, StyledAnchor } from 'config/fontStyles';
import { indentSizeLaptop, indentSizeMobile } from 'config/spacing';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  border-left: none;
  height: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: right;
  padding: ${indentSizeMobile}px;

  @media (min-width: 641px) {
    positon: fixed;
    padding: ${indentSizeLaptop}px;
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
      <NavWhite>experience</NavWhite>
    </StyledLink>
    <StyledLink to="/about">
      <NavWhite>about</NavWhite>
    </StyledLink>
    <StyledAnchor
      href="https://freddiehoy.github.io/Unbeatable-TicTacToe/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <NavWhite>fun game</NavWhite>
    </StyledAnchor>
  </NavContainer>
);

export default withRouter(NavBar);

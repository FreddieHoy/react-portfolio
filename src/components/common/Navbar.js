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
  width: 50%;

  @media (min-width: 641px) {
    right: ${indentSizeLaptop}px;
    padding: ${indentSizeLaptop}px 0;
    padding-left: ${indentSizeLaptop}px;
    border-left: 1px solid ${colors.borderWhite};
    justify-content: space-between;
    height: 100vh;
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
    <NavWhite>about</NavWhite>
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

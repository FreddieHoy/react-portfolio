import { colors } from 'config/colors';
import { NavWhite, StyledAnchor, StyledLink } from 'config/fontStyles';
import { indentSizeLaptop, indentSizeMobile } from 'config/spacing';
import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: none;

  @media (min-width: 641px) {
    height: 100vh;
  }
`;

const SideBar = styled.div`
  border-left: none;
  position: fixed;
  top: 0;
  height: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: right;
  right: ${indentSizeMobile}px;
  padding: ${indentSizeMobile}px 0;
  padding-left: ${indentSizeMobile}px;

  @media (min-width: 641px) {
    right: ${indentSizeLaptop}px;
    padding: ${indentSizeLaptop}px 0;
    padding-left: ${indentSizeLaptop}px;
    border-left: 1px solid ${colors.borderWhite};
    justify-content: space-between;
    height: 100vh;
  }
`;

const NavBar = () => (
  <NavContainer>
    <SideBar>
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
    </SideBar>
  </NavContainer>
);

export default withRouter(NavBar);

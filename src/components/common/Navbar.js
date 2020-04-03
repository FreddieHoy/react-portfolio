import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { colors } from 'config/colors';
import { NavWhite, StyledLink } from 'config/fontStyles';
import { indentSizelaptop } from 'config/spacing';

const NavContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
`;

const SideBar = styled.div`
  border-left: 1px solid ${colors.borderWhite};
  position: fixed;
  right: ${indentSizelaptop}px;
  top: 0;
  height: 100vh;
  padding: ${indentSizelaptop}px 0;
  padding-left: ${indentSizelaptop}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
`;

const NavBar = () => (
  <NavContainer>
    <SideBar>
      <StyledLink to="/experience">
        <NavWhite>experience</NavWhite>
      </StyledLink>
      <NavWhite>about me</NavWhite>
      <NavWhite>a fun game</NavWhite>
    </SideBar>
  </NavContainer>
);

export default withRouter(NavBar);

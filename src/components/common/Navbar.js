import React from 'react';
import styled from 'styled-components';

import { indentSizelaptop } from 'config/spacing';
import { NavWhite } from 'config/fontStyles';
import { colors } from 'config/colors';

const Container = styled.div`
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

export const Navbar = () => (
  <Container>
    <SideBar>
      <NavWhite>experience</NavWhite>
      <NavWhite>about</NavWhite>
    </SideBar>
  </Container>
);

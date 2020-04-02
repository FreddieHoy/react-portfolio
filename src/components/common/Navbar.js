import React from 'react';
import styled from 'styled-components';

import { indentSizelaptop } from 'config/spacing';
import { NavWhite } from 'config/fontStyles';
import { colors } from 'config/colors';

const Container = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  padding: ${indentSizelaptop}px;
  background-colour: yellow;
  border-left: 1px solid ${colors.borderWhite};
  text-align: right;
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Navbar = () => (
  <Container>
    <NavWhite>experience</NavWhite>
    <NavWhite>about</NavWhite>
  </Container>
);

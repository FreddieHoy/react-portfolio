import React from 'react';
import styled from 'styled-components';
import { colors } from 'config/colors';

const Container = styled.div`
  width: 100%;
`;

const NameTitle = styled.h1`
  font-size: 36px;
  margin: 0;
  color: ${colors.whiteText};
`;

const Navbar = () => (
  <Container>
    <NameTitle>freddie</NameTitle>
    <NameTitle>hoy</NameTitle>
  </Container>
);

export default Navbar;

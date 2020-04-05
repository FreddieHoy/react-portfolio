import React from 'react';
import LyvlyLogo from 'static/LyvlyLogo.svg';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 0 4px 1px black;
`;

export const Lyvly = () => (
  <Container>
    <img src={LyvlyLogo} alt="Lyvly Logo" width="70" height="70" />
  </Container>
);

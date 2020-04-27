import { colors } from 'config/colors';
import { tabletBreakPoint } from 'config/spacing';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  text-decoration: none;
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledI = styled.i`
  font-size: 50px;
  color: ${colors.backgroundThree};
  @media (min-width: ${tabletBreakPoint}px) {
    font-size: 60px;
    transition: color 0.4s ease;
    :hover {
      color: ${colors.redText};
    }
  }
`;

export const BackArrow = ({ toPage }) => (
  <Container to={toPage}>
    <StyledLink to={toPage}>
      <StyledI className="fas fa-arrow-circle-left" />
    </StyledLink>
  </Container>
);

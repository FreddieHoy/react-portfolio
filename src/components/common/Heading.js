import { NameTitle } from 'config/fontStyles';
import { indentSizeMobile } from 'config/spacing';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TitleContainer = styled.div`
  padding: ${indentSizeMobile}px;
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Heading = () => (
  <TitleContainer>
    <StyledLink to="/home">
      <NameTitle>
        FREDDIE
        <br />
        HOY
      </NameTitle>
    </StyledLink>
  </TitleContainer>
);

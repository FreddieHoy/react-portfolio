import React from 'react';
import styled from 'styled-components';

export const ExperienceItem = ({
  src,
  alt,
  width,
  height,
  backgroundColor
}) => {
  const Container = styled.div`
    background-color: ${backgroundColor};
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    box-shadow: 0 0 4px 1px black;
    margin: 5px;
    :hover {
      color: red;
      cursor: pointer;
    }
    @media (min-width: 641px) {
      width: 80%;
    }
  `;

  return (
    <Container>
      <img src={src} alt={alt} width={width} height={height} />
    </Container>
  );
};

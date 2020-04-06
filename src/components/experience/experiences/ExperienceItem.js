import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ExperienceItem = ({
  src,
  alt,
  width,
  height,
  backgroundColor,
  url
}) => {
  const ContainerLink = styled(Link)`
    text-decoration: none;
    background-color: ${backgroundColor};
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1px;
    box-shadow: 0 0 1px 1px black;
    margin: 5px;
    :hover {
      color: red;
      cursor: pointer;
    }
    @media (min-width: 641px) {
      max-height: 200px;
    }
  `;

  return (
    <ContainerLink to={`experience/${url}`}>
      <img src={src} alt={alt} width={width} height={height} />
    </ContainerLink>
  );
};

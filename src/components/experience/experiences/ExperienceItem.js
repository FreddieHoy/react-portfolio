import {
  ipadProHeightBreakPoint,
  laptopBreakPoint,
  mobileBreakPoint
} from 'config/spacing';
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
    box-shadow: 0 0 1px 1px black;
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1px;
    margin: 10px 0;
    :hover {
      cursor: pointer;
    }
    @media (min-width: ${mobileBreakPoint}px) {
      width: 100%;
    }
    @media (min-width: ${laptopBreakPoint}px) {
      width: 60%;
      transition: width 0.4s ease;
      :hover {
        width: 100%;
      }
    }
    @media (min-height: ${ipadProHeightBreakPoint}px) {
      width: 100%;
    }
  `;

  return (
    <ContainerLink to={`experience/${url}`}>
      <img src={src} alt={alt} width={width} height={height} />
    </ContainerLink>
  );
};

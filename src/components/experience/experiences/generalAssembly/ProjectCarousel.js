import 'pure-react-carousel/dist/react-carousel.es.css';

import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider
} from 'pure-react-carousel';
import React from 'react';
import BoredGames from 'static/GAProjects/BoredGames.png';
import LostThePlot from 'static/GAProjects/LostThePlot.png';
import PacMan from 'static/GAProjects/PacMan.png';
import YesChef from 'static/GAProjects/YesChef.png';
import styled from 'styled-components';

const Conatiner = styled(CarouselProvider)`
  width: 100%;
  position: relative;
  margin: 20px 0;
`;

const Image = styled.img`
  max-width: 100%;
  transition: opacity 0.4s ease;
  :hover {
    opacity: 0.3;
  }
`;

const NewButtonNext = styled(ButtonNext)`
  position: absolute;
  right: 0;

  top: calc(50% - 20px);
  padding-bottom: 6px;
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 20px 0 0 20px;
  font-size: 30px;
`;
const NewButtonBack = styled(ButtonBack)`
  position: absolute;
  left: 0;

  top: calc(50% - 20px);
  padding-bottom: 6px;
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 0 20px 20px 0;
  font-size: 30px;
`;

export const ProjectCarousel = () => (
  <Conatiner naturalSlideWidth={196} naturalSlideHeight={100} totalSlides={4}>
    <Slider>
      <Slide index={0}>
        <Image src={LostThePlot} alt="Lost The Plot" />
      </Slide>
      <Slide index={1}>
        <Image src={YesChef} alt="Yes Chef" />
      </Slide>
      <Slide index={2}>
        <Image src={PacMan} alt="Pac Man" />
      </Slide>
      <Slide index={3}>
        <Image src={BoredGames} alt="Bored Games" />
      </Slide>
    </Slider>
    <NewButtonBack>{'<'}</NewButtonBack>
    <NewButtonNext>{'>'}</NewButtonNext>
  </Conatiner>
);

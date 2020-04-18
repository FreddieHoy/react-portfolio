import 'pure-react-carousel/dist/react-carousel.es.css';

import { colors } from 'config/colors';
import {
  HeadingTwo,
  LightBlueText,
  Paragraph,
  RedText
} from 'config/fontStyles';
import { tabletBreakPoint } from 'config/spacing';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider
} from 'pure-react-carousel';
import React from 'react';
import styled from 'styled-components';

import { GAMainText, GAProjectText } from './GAText';

const Conatiner = styled(CarouselProvider)`
  width: 100%;
  position: relative;
  margin: 20px 0;
`;

const SliderHoverTrigger = styled(Slider)`
  @media (min-width: ${tabletBreakPoint}px) {
    :hover .image {
      transition: opacity 0.5s ease;
      opacity: 0.3;
    }
    :hover .textBox {
      transition: opacity 0.5s ease;
      opacity: 1;
    }
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

const Image = styled.img`
  max-width: 100%;
  transition: opacity 0.4s ease;
`;

const TextBox = styled.div`
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 125px);
  padding-top: 10px;
  opacity: 0;
  width: 250px;
  height: 100px;
  text-align: center;
  background-color: ${colors.backgroundTwo};
  border-radius: 5px;
`;

const GitHubLink = styled.a`
  text-decoration: none;
`;

export const ProjectCarousel = () => (
  <Conatiner naturalSlideWidth={196} naturalSlideHeight={100} totalSlides={4}>
    <SliderHoverTrigger>
      {GAProjectText.projectInfoArray.map((project) => (
        <Slide index={project.index} key={project.title}>
          <Image className="image" src={project.image} alt={project.title} />
          <TextBox className="textBox">
            <HeadingTwo>
              <RedText>{project.title}</RedText>
            </HeadingTwo>
            <GitHubLink href={project.gitHubLink}>
              <Paragraph>
                <LightBlueText>{GAMainText.repo}</LightBlueText>
              </Paragraph>
            </GitHubLink>
          </TextBox>
        </Slide>
      ))}
    </SliderHoverTrigger>
    <NewButtonBack>{'<'}</NewButtonBack>
    <NewButtonNext>{'>'}</NewButtonNext>
  </Conatiner>
);

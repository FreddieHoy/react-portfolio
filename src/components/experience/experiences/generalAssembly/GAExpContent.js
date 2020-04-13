import {
  HeadingTwo,
  LightBlueText,
  Paragraph,
  RedText
} from 'config/fontStyles';
import React from 'react';
// import BoredGames from 'static/GAProjects/BoredGames.png';
// import LostThePlot from 'static/GAProjects/LostThePlot.png';
// import PacMan from 'static/GAProjects/PacMan.png';
import YesChef from 'static/GAProjects/YesChef.png';
import styled from 'styled-components';

const StyledImage = styled.img`
  padding: 10px 0;
`;

const Container = styled.div`
  padding: 20px 0;
`;

export const GAContentMain = () => (
  <div>
    <Paragraph>
      <RedText>Role: </RedText>
      Software Enginnering Student.
    </Paragraph>
    <Paragraph>
      <RedText>Dates: </RedText>
      June 2019 - September 2019. 4 months.
    </Paragraph>
    <Paragraph>
      Spent a fantastic summer learning the
      <LightBlueText> fundamentals </LightBlueText>
      of being a software enginer, with a fantastic group of 20 Students.
    </Paragraph>
    <Paragraph>
      We learned the basics of HTML, CSS and
      <LightBlueText> JavaScript </LightBlueText>
      along with some fantatic and higly used framework such as
      <LightBlueText> React and Express. </LightBlueText>
    </Paragraph>
  </div>
);

export const GAContentProject = () => (
  <Container>
    <HeadingTwo>
      <RedText> YesChef</RedText>
    </HeadingTwo>
    <StyledImage src={YesChef} alt="YesChef" width={360} />
    <Paragraph>
      <LightBlueText>About</LightBlueText>
    </Paragraph>
    <Paragraph>
      The idea for this App was to allow users to share their home-cooked meals
      with one another by posting an image with a description and allowing other
      users to comment. The user can see their profile page and a news feed.
    </Paragraph>
    <Paragraph>
      <LightBlueText>Technologies</LightBlueText>
    </Paragraph>
    <Paragraph>JavaScript, Python, React, Django, MongoDB</Paragraph>
  </Container>
);

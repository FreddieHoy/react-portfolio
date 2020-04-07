import { colors } from 'config/colors';
import { BlueText, HeadingOne, Paragraph, RedText } from 'config/fontStyles';
import { mobileSpaceForHeading } from 'config/spacing';
import React from 'react';
// import LyvlyHomePage from 'static/LyvlyHomePage.png';
import LyvlyLogo from 'static/LyvlyLogo.svg';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: scroll;
  margin-top: ${mobileSpaceForHeading}px;

  @media (min-width: 641px) {
    width: 80%;
  }
`;

const HeadingConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const TitleContainer = styled.div`
  width: 80%;
`;

const ExperienceContent = styled.div`
  overflow: scroll;
  height: 75%;

  @media (min-width: 641px) {
    width: 60%;
  }
`;

const LogoBackground = styled.a`
  background-color: white;
  transition: background-color 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32%;
  height: 100px;
  border-radius: 2px;
  :hover {
    background-color: ${colors.blueText};
  }
`;

const WebsiteImage = styled.img`
  width: 100%;
  height: auto;
`;
export const LyvlyExp = () => (
  <Container>
    <div>
      <HeadingConatiner>
        <TitleContainer>
          <HeadingOne>
            Working at
            <RedText> Lyvly</RedText>
            <BlueText>.</BlueText>
          </HeadingOne>
        </TitleContainer>
        <LogoBackground href="https://www.lyvly.uk/">
          <img src={LyvlyLogo} alt="Lyvly logo" width={70} height={70} />
        </LogoBackground>
      </HeadingConatiner>
    </div>
    <ExperienceContent>
      <Paragraph>
        <RedText>Role: </RedText>
        Full Stack Software Engineer.
      </Paragraph>
      <Paragraph>
        <RedText>Dates: </RedText>
        December 2019 - March 2020. 4 months.
      </Paragraph>
      <Paragraph>
        Lyvly provides community-based housing for people to rent great flats in
        London. But also allowes members to find an instant community to
        socailise and be immersed in London life.
      </Paragraph>
      <Paragraph>
        This was my first time working as a software engineer. I was thrown
        straight into the deep end, pairing with some fantastic engineering
        minds.
      </Paragraph>
      <Paragraph>
        The team was developing a cutting-edge event-driven microservice
        infrastructure, based around an AWS Kinesis event stream.
      </Paragraph>
      <Paragraph>
        <RedText>My Role</RedText>
        <br />
        <br />
        FrontEnd
        <br />
        I spent a significant time working on www.lyvly.uk remaking many of the
        pages and adding testcoverage.
        <br />
        <br />
        Backend
        <br />
        Much of this work was creating efficent buiness logic. For example, new
        members had to have character references. I worked on interacting with
        www.thehomeppl.com API to automatically create these references.
        <br />
        <br />
        Development Methodology
        <br />
        Learning how an effective agile software development team works.
      </Paragraph>
    </ExperienceContent>
  </Container>
);

// <WebsiteImage src={LyvlyHomePage} alt="Lyvly home page" />

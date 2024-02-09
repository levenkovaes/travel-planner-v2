import React from "react";

import Footer from "../../../shared/ui/layout/footer";
import Header from "../../../shared/ui/layout/header";
import { Heading1, Paragraph1 } from "../../../shared/ui/typography";
import {
  HomeContainer,
  MainContainer,
  MainWrapper,
  Section,
  STransparentLongButton,
} from "./styled";

const Home = () => {
  return (
    <HomeContainer>
      <Header></Header>

      <MainContainer>
        <MainWrapper>
          <Section>
            <div>
              <Heading1>Travel Planner</Heading1>
              <Paragraph1>
                Manage your travel. <br />
                Create and&nbsp;share your travel&nbsp;plans. <br />
                Create packing and&nbsp;to-do lists.
              </Paragraph1>
            </div>
            <STransparentLongButton>Try</STransparentLongButton>
          </Section>
        </MainWrapper>
      </MainContainer>

      <Footer></Footer>
    </HomeContainer>
  );
};

export default Home;

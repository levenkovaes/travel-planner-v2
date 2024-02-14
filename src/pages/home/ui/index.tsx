import React from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../../../shared/ui/layout/footer";
import Header from "../../../shared/ui/layout/header";
import {
  HomeButton,
  HomeContainer,
  HomeH1,
  HomeParagraph,
  MainContainer,
  MainWrapper,
  Section,
} from "./styled";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/menu");

  return (
    <HomeContainer>
      <Header />

      <MainContainer>
        <MainWrapper>
          <Section>
            <div>
              <HomeH1>Travel Planner</HomeH1>
              <HomeParagraph>
                Manage your travel. <br />
                Create and&nbsp;share your travel&nbsp;plans. <br />
                Create packing and&nbsp;to-do lists.
              </HomeParagraph>
            </div>
            <HomeButton onClick={handleClick}>Try</HomeButton>
          </Section>
        </MainWrapper>
      </MainContainer>

      <Footer></Footer>
    </HomeContainer>
  );
};

export default Home;

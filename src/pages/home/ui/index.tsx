import React from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../../../shared/ui/layout/footer";
import Header from "../../../shared/ui/layout/header";
import {
  HomeAttribution,
  HomeButton,
  HomeContainer,
  HomeH1,
  HomeParagraph,
  MainContainer,
  MainWrapper,
  Section,
} from "./styled";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (): void => navigate("/menu");

  return (
    <HomeContainer>
      <Header variant="transparentBg" />

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

      <HomeAttribution>
        Photo by{" "}
        <a href="https://unsplash.com/@laohu911?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Sheng Hu
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/a-person-standing-on-a-large-body-of-water-cUqBaq6eBj0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </HomeAttribution>
      <Footer variant="transparentBg" />
    </HomeContainer>
  );
};

export default Home;

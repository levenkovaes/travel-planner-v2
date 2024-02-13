import React from "react";

import Footer from "../../../shared/ui/layout/footer";
import Header from "../../../shared/ui/layout/header";
import { Heading1, Paragraph } from "../../../shared/ui/typography";
import {
  HomeContainer,
  MainContainer,
  MainWrapper,
  Section,
  STransparentLongButton,
} from "./styled";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <Header></Header>

      <MainContainer>
        <MainWrapper>
          <Section>
            <div>
              <Heading1>Travel Planner</Heading1>
              <Paragraph>
                Manage your travel. <br />
                Create and&nbsp;share your travel&nbsp;plans. <br />
                Create packing and&nbsp;to-do lists.
              </Paragraph>
            </div>
            <STransparentLongButton onClick={() => navigate("/menu")}>
              Try
            </STransparentLongButton>
          </Section>
        </MainWrapper>
      </MainContainer>

      <Footer></Footer>
    </HomeContainer>
  );
};

export default Home;

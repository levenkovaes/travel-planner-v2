import React from "react";

import { Heading1, Paragraph1 } from "../../../shared/ui/typography";
import {
  HomeContainer,
  HomeWrapper,
  Section,
  STransparentLongButton,
} from "./styled";

const Home = () => {
  return (
    <HomeContainer>
      <HomeWrapper>
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
      </HomeWrapper>
    </HomeContainer>
  );
};

export default Home;

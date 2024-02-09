import React from "react";

import { Heading1, Paragraph1 } from "../../../shared/ui/typography";
import { HomeContainer, HomeWrapper, Section } from "./styled";

export const Home = () => {
  return (
    <HomeContainer>
      <HomeWrapper>
        <Section>
          <Heading1>Travel Planner</Heading1>
          <Paragraph1>
            Manage your travel. <br />
            Create and&nbsp;share your travel&nbsp;plans. <br />
            Create packing and&nbsp;to-do lists.
          </Paragraph1>
        </Section>
      </HomeWrapper>
    </HomeContainer>
  );
};

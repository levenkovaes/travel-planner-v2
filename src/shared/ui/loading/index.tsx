import React from "react";

import { Dot, LoadingContainer } from "./styled";

const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <Dot />
      <Dot />
    </LoadingContainer>
  );
};

export default Loading;

import React from "react";

import { SmallerParagraph } from "../../typography";
import { ModalContentWrapper, ModalHeading } from "./styled";
import { ModalContentProps } from "./types";

const ModalContent: React.FC<ModalContentProps> = ({
  heading,
  text,
  children,
}) => {
  return (
    <ModalContentWrapper>
      <ModalHeading as="h3">{heading}</ModalHeading>
      {text && <SmallerParagraph as="h3">{text}</SmallerParagraph>}
      {children}
    </ModalContentWrapper>
  );
};

export default ModalContent;

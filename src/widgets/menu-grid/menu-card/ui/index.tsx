import React from "react";
import { useNavigate } from "react-router-dom";

import { Heading2, SmallerParagraph } from "../../../../shared/ui/typography";
import MenuCardProps from "../../types";
import { CardButton, CardContainer } from "./styled";

const MenuCard: React.FC<MenuCardProps> = ({ title, description, link }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(link);
  };

  return (
    <CardContainer>
      <Heading2>{title}</Heading2>
      <SmallerParagraph>{description}</SmallerParagraph>
      <CardButton onClick={handleClick}>&gt;</CardButton>
    </CardContainer>
  );
};

export default MenuCard;

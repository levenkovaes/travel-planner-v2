import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { selectChecklists } from "../../../../pages/packing-checklist/ui/packingChecklistSlice/packingChecklistSlice";
import MEDIA_QUERY from "../../../../shared/constants/styles/media-query";
import Icon from "../../../../shared/ui/assets/icons/add.svg";
import { Link } from "../../../../shared/ui/link";
import { Heading2, SmallerParagraph } from "../../../../shared/ui/typography";
import MenuCardProps, { CardTitleEnum } from "../../types";
import { CardButton, CardContainer } from "./styled";
import { nanoid } from "@reduxjs/toolkit";
import { Chip } from "../../../../shared/ui/chip";
import { COLORS } from "../../../../shared/ui/theme";

const MenuCard: React.FC<MenuCardProps> = ({
  title,
  description,
  addLink,
  previousLink,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(addLink);
  };

  const allChecklists = useSelector(selectChecklists);

  const previousItems = useMemo(() => {
    switch (title) {
      case CardTitleEnum.Planner:
        return "";
      case CardTitleEnum.ToDo:
        return "";
      case CardTitleEnum.PackingList:
        return [...allChecklists]
          .reverse()
          .filter((item, index) => index < 6)
          .map((checklist) => {
            return (
              <ItemLink
                onClick={() => navigate(`/packing-checklists/${checklist.id}`)}
                key={nanoid()}
              >
                <ItemChip>{checklist.name}</ItemChip>
              </ItemLink>
            );
          });
    }
  }, [allChecklists]);

  return (
    <FeatureContainer>
      <MenuCardContainer>
        <Heading2>{title}</Heading2>
        <SmallerParagraph>{description}</SmallerParagraph>
        <CardButton onClick={handleClick}>
          <AddIcon />
        </CardButton>
      </MenuCardContainer>
      <PreviousContainer>
        <PreviousItems>{previousItems} </PreviousItems>
        <MoreLink href={previousLink}>See more...</MoreLink>
      </PreviousContainer>
    </FeatureContainer>
  );
};

const FeatureContainer = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    grid-template-columns: 1fr;
  }
`;

const MenuCardContainer = styled(CardContainer)`
  border-radius: 8px 0 0 8px;

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    text-align: center;
    border-radius: 8px 8px 0 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.card};
  }
`;

const AddIcon = styled(Icon)`
  width: 32px;
  height: auto;
  path {
    fill: ${({ theme }) => theme.colors.text};
  }

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    width: 24px;
  }
`;

const PreviousContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  border-radius: 0 8px 8px 0;
  border: 2px solid ${({ theme }) => theme.colors.card};

  @media ${MEDIA_QUERY.tablet}, ${MEDIA_QUERY.mobile} {
    border-radius: 0 0 8px 8px;
  }
`;

const PreviousItems = styled.div``;

const ItemLink = styled(Link)`
  display: inline-block;
  padding: 0;
  margin: 0px 10px 8px 0;
`;

const ItemChip = styled(Chip)`
  color: ${COLORS.primaryDarkColor};
  background-color: ${COLORS.accentLightColor};
`;

const MoreLink = styled(Link)`
  color: #8f8f8f;
`;

export default MenuCard;

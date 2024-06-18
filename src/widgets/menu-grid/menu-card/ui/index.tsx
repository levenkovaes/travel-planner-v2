import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { nanoid } from "@reduxjs/toolkit";

import { selectChecklists } from "../../../../pages/packing-checklist/ui/packingChecklistSlice/packingChecklistSlice";
import {
  addToDoList,
  selectToDoLists,
} from "../../../../pages/to-do-list/ui/toDoListSlice/toDoListSlice";
import MEDIA_QUERY from "../../../../shared/constants/styles/media-query";
import Icon from "../../../../shared/ui/assets/icons/add.svg";
import { Chip } from "../../../../shared/ui/chip";
import { LINK_FONT_STYLES, Link } from "../../../../shared/ui/link";
import { COLORS } from "../../../../shared/ui/theme";
import { Heading2, SmallerParagraph } from "../../../../shared/ui/typography";
import MenuCardProps, { CardTitleEnum } from "../../types";
import { CardButton, CardContainer } from "./styled";

const MenuCard: React.FC<MenuCardProps> = ({
  title,
  description,
  addLink,
  previousLink,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // TODO
  const handleClick = () => {
    if (title === CardTitleEnum.ToDo) {
      const id = nanoid();
      dispatch(addToDoList(id));
      navigate(addLink + "/" + id);
    } else {
      navigate(addLink);
    }
  };

  const allToDoLists = useSelector(selectToDoLists);
  const allChecklists = useSelector(selectChecklists);

  const previousItems = useMemo(() => {
    switch (title) {
      case CardTitleEnum.Planner:
        return "";
      case CardTitleEnum.ToDo:
        return [...allToDoLists]
          .reverse()
          .filter((item, index) => index < 6)
          .map((list) => {
            return (
              <ItemLink
                onClick={() => navigate(`/to-do-list/${list.id}`)}
                key={nanoid()}
              >
                <ItemChip>{list.name}</ItemChip>
              </ItemLink>
            );
          });
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

  console.log(previousItems);

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
        {previousItems && previousItems.length > 0 ? (
          <>
            <PreviousItems>{previousItems} </PreviousItems>
            <MoreLink href={previousLink}>See more...</MoreLink>
          </>
        ) : (
          <PreviousText>There is nothing to display yet</PreviousText>
        )}
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

const PreviousText = styled(SmallerParagraph)`
  ${LINK_FONT_STYLES}
  color: #8f8f8f;
`;

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

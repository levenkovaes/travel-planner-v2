import React, { MouseEventHandler, useState } from "react";

import { nanoid } from "@reduxjs/toolkit";

import { PakingItem } from "../../../entities/packing-item/ui";
import AddPackingItemModal from "../../add-packing-item-modal/ui";
import AddIcon from "./assets/add.svg";
import { AddIconContainer, GroupContainer, GroupHeading } from "./styled";
import { PackingItemGroupProps } from "./types";

const PackingItemGroup: React.FC<PackingItemGroupProps> = ({ group }) => {
  const [isAddItemModalDisplaying, setIsAddItemModalDisplaying] =
    useState(false);

  const [groupName, items] = group;

  const openAddItemModal = () => {
    setIsAddItemModalDisplaying(true);
  };

  const closeAddItemModal = () => {
    setIsAddItemModalDisplaying(false);
  };

  const handleAddItem: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    openAddItemModal();
  };

  return (
    <>
      <GroupContainer key={nanoid()}>
        <GroupHeading>{groupName}</GroupHeading>

        {items.map((item) => (
          <PakingItem key={nanoid()} item={item} groupName={groupName} />
        ))}

        <AddIconContainer onClick={handleAddItem}>
          <AddIcon />
        </AddIconContainer>
      </GroupContainer>

      {isAddItemModalDisplaying && (
        <AddPackingItemModal
          handleClose={closeAddItemModal}
          selectedGroupName={groupName}
        />
      )}
    </>
  );
};

export default PackingItemGroup;

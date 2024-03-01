import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { nanoid } from "@reduxjs/toolkit";

import {
  ChecklistButtonWrapper,
  LongButton,
  TransparentLongButton,
} from "../../../shared/ui/button";
import CenteringDiv from "../../../shared/ui/centering-div";
import { Grid } from "../../../shared/ui/grid";
import RemoveCheckmarcksModal from "../../../shared/ui/modal/modal-content/remove-checkmarks-modal";
import { CenteredHeading1 } from "../../../shared/ui/typography";
import PackingItemGroup from "../../../widgets/packing-item-group/ui";
import { selectChecklistById } from "./packingChecklistSlice/packingChecklistSlice";

const PackingChecklist = () => {
  const { checklistId } = useParams();
  const checklist = useSelector(selectChecklistById(checklistId));

  const [
    isRemoveCheckmarksModalDisplaying,
    setIsRemoveCheckmarksModalDisplaying,
  ] = useState(false);

  const openRemoveCheckmarksModal = () => {
    setIsRemoveCheckmarksModalDisplaying(true);
  };

  const closeRemoveCheckmarksModal = () => {
    if (isRemoveCheckmarksModalDisplaying) {
      setIsRemoveCheckmarksModalDisplaying(false);
    }
  };

  const print = () => window.print();

  const checklistBody = useMemo(() => {
    if (checklist) {
      return Object.entries(checklist.categories).map((el) => (
        <PackingItemGroup key={nanoid()} group={el} />
      ));
    }
  }, [checklist]);

  return (
    <CenteringDiv>
      <CenteredHeading1>
        {checklist?.name || "Sorry, checklist not found"}
      </CenteredHeading1>

      <Grid>{checklistBody}</Grid>

      {checklistBody && (
        <ChecklistButtonWrapper>
          <LongButton onClick={print}>Print checklist</LongButton>
          <TransparentLongButton isDelete onClick={openRemoveCheckmarksModal}>
            Remove checkmarks
          </TransparentLongButton>
        </ChecklistButtonWrapper>
      )}

      {isRemoveCheckmarksModalDisplaying && (
        <RemoveCheckmarcksModal handleClose={closeRemoveCheckmarksModal} />
      )}
    </CenteringDiv>
  );
};

export default PackingChecklist;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { TransparentLongButton } from "../../../shared/ui/button";
import CenteringDiv from "../../../shared/ui/centering-div";
import { CenteredHeading1, Paragraph } from "../../../shared/ui/typography";
import {
  deleteAllChecklists,
  selectChecklists,
} from "../../packing-checklist/ui/packingChecklistSlice/packingChecklistSlice";
import { AllChecklistsWrapper, ChecklistName } from "./styled";

const PreviousPackingChecklists = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allChecklists = useSelector(selectChecklists);

  const [paragraphContent, setParagraphContent] = useState(
    "You haven't created any checklist yet"
  );

  const namesToDisplay = allChecklists.map((checklist) => (
    <ChecklistName
      as="a"
      onClick={() => navigate(`/packing-checklists/${checklist.id}`)}
      key={checklist.id}
    >
      {checklist.name}
    </ChecklistName>
  ));

  const handleClick = () => {
    dispatch(deleteAllChecklists());
    setParagraphContent("All checklists have been deleted!");
  };

  return (
    <>
      <CenteredHeading1>Previous Checklists</CenteredHeading1>
      <AllChecklistsWrapper>
        {namesToDisplay}

        {allChecklists.length ? (
          <TransparentLongButton onClick={handleClick}>
            Delete all checklist
          </TransparentLongButton>
        ) : (
          <Paragraph>{paragraphContent}</Paragraph>
        )}
      </AllChecklistsWrapper>
    </>
  );
};

export default PreviousPackingChecklists;

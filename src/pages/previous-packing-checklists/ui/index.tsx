import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { TransparentLongButton } from "../../../shared/ui/button";
import CenteringDiv from "../../../shared/ui/centering-div";
import { CenteredHeading1, Paragraph } from "../../../shared/ui/typography";
import {
  deleteAllChecklists,
  deleteChecklist,
  selectChecklists,
} from "../../packing-checklist/ui/packingChecklistSlice/packingChecklistSlice";
import {
  AllChecklistsWrapper,
  ChecklistName,
  ChecklistWrapper,
} from "./styled";
import { DeleteIconButton } from "../../../shared/ui/button/delete-icon/ui";
import { toast } from "react-toastify";

const PreviousPackingChecklists = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allChecklists = useSelector(selectChecklists);

  const [paragraphContent, setParagraphContent] = useState(
    "You haven't created any checklist yet"
  );

  const handleDeleteChecklist = (checklistId: string | null) => {
    const notify = () =>
      toast.info("Checklist has been removed!", {
        autoClose: 500,
        hideProgressBar: true,
        progress: undefined,
      });

    if (checklistId) {
      dispatch(deleteChecklist(checklistId));
      notify();
    }
  };

  const namesToDisplay = allChecklists.map((checklist) => (
    <ChecklistWrapper key={checklist.id}>
      <ChecklistName
        as="a"
        onClick={() => navigate(`/packing-checklists/${checklist.id}`)}
      >
        {checklist.name}
      </ChecklistName>

      <DeleteIconButton
        handleClick={() => {
          handleDeleteChecklist(checklist.id);
        }}
      />
    </ChecklistWrapper>
  ));

  const handleDeleteAll = () => {
    dispatch(deleteAllChecklists());
    setParagraphContent("All checklists have been deleted!");
  };

  return (
    <>
      <CenteredHeading1>Previous Checklists</CenteredHeading1>
      <AllChecklistsWrapper>
        {namesToDisplay}

        {allChecklists.length ? (
          <TransparentLongButton isDelete onClick={handleDeleteAll}>
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

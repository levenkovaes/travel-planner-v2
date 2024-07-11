import { ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { TransparentLongButton } from "../../../shared/ui/button";
import { DeleteIconButton } from "../../../shared/ui/button/delete-icon/ui";
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

const PreviousPackingChecklists: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allChecklists = useSelector(selectChecklists);

  const [paragraphContent, setParagraphContent] = useState<string>(
    "You haven't created any checklist yet"
  );

  const handleDeleteChecklist = (checklistId: string | null): void => {
    if (checklistId) {
      dispatch(deleteChecklist(checklistId));
      toast.info("Checklist has been removed!", {
        autoClose: 500,
        hideProgressBar: true,
        progress: undefined,
      });
    }
  };

  const namesToDisplay: ReactElement[] = allChecklists.map((checklist) => (
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

  const handleDeleteAll = (): void => {
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

import React, { ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { TransparentLongButton } from "../../shared/ui/button";
import { DeleteIconButton } from "../../shared/ui/button/delete-icon/ui";
import { Link } from "../../shared/ui/link";
import { CenteredHeading1, Paragraph } from "../../shared/ui/typography";
import {
  AllChecklistsWrapper,
  ChecklistWrapper,
} from "../previous-packing-checklists/ui/styled";
import {
  deleteAllToDoLists,
  deleteToDoList,
  selectToDoLists,
} from "../to-do-list/ui/toDoListSlice/toDoListSlice";

const ToDoLists: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allToDoLists = useSelector(selectToDoLists);

  const [paragraphContent, setParagraphContent] = useState<string>(
    "You haven't created any to-do list yet"
  );

  const handleDeleteList = (listId: string | null): void => {
    if (listId) {
      dispatch(deleteToDoList(listId));
      toast.info("Checklist has been removed!", {
        autoClose: 500,
        hideProgressBar: true,
        progress: undefined,
      });
    }
  };

  const namesToDisplay: ReactElement[] = allToDoLists.map((list) => (
    <ChecklistWrapper key={list.id}>
      <Link onClick={() => navigate(`/to-do-list/${list.id}`)}>
        {list.name}
      </Link>

      <DeleteIconButton
        handleClick={() => {
          handleDeleteList(list.id);
        }}
      />
    </ChecklistWrapper>
  ));

  const handleDeleteAll = (): void => {
    dispatch(deleteAllToDoLists());
    setParagraphContent("All checklists have been deleted!");
  };

  return (
    <>
      <CenteredHeading1>Previous Checklists</CenteredHeading1>
      <AllChecklistsWrapper>
        {namesToDisplay}

        {allToDoLists.length ? (
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
export default ToDoLists;

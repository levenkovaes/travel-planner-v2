import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";

import ToDoItem from "../../../entities/to-do-item/ui";
import { TransparentLongButton } from "../../../shared/ui/button";
import CenteringDiv from "../../../shared/ui/centering-div";
import RemoveCheckmarcksModal from "../../../shared/ui/modal/modal-content/remove-checkmarks-modal";
import { Heading1 } from "../../../shared/ui/typography";
import { selectToDoList } from "./toDoListSlice/toDoListSlice";
import { ListContainer } from "./styled";

const ToDoList = () => {
  const toDoList = useSelector(selectToDoList());
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

  const listItems = useMemo(
    () => toDoList.map((item) => <ToDoItem item={item} />),
    [toDoList]
  );

  return (
    <CenteringDiv>
      <Heading1>To-do List</Heading1>
      <ListContainer> {listItems}</ListContainer>

      <TransparentLongButton isDelete onClick={openRemoveCheckmarksModal}>
        Remove checkmarks
      </TransparentLongButton>

      {isRemoveCheckmarksModalDisplaying && (
        <RemoveCheckmarcksModal
          type="todo"
          handleClose={closeRemoveCheckmarksModal}
        />
      )}
    </CenteringDiv>
  );
};

export default ToDoList;

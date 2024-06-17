import React, { MouseEventHandler, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import ToDoItem from "../../../entities/to-do-item/ui";
import { TransparentLongButton } from "../../../shared/ui/button";
import CenteringDiv from "../../../shared/ui/centering-div";
import RemoveCheckmarcksModal from "../../../shared/ui/modal/modal-content/remove-checkmarks-modal";
import { Heading1 } from "../../../shared/ui/typography";
import { selectToDoListById } from "./toDoListSlice/toDoListSlice";
import { AddIconContainer, ListContainer } from "./styled";
import { useParams } from "react-router-dom";
import AddIcon from "../../../shared/ui/assets/icons/add-small.svg";
import Modal from "../../../shared/ui/modal";
import ModalContent from "../../../shared/ui/modal/modal-text-container";
import AddToDoItemModalBody from "../../../widgets/add-to-do-item-modal-body/ui";

const ToDoList = () => {
  const { listId } = useParams();
  const toDoList = useSelector(selectToDoListById(listId || ""));
  const [isAddItemModalDisplaying, setIsAddItemModalDisplaying] =
    useState(false);
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

  const listItems = useMemo(() => {
    if (toDoList) {
      return toDoList.items.map((item) => (
        <ToDoItem item={item} listId={listId || ""} key={item.id} />
      ));
    }
  }, [toDoList]);

  const closeAddItemModal = () => {
    if (isAddItemModalDisplaying) {
      setIsAddItemModalDisplaying(false);
    }
  };

  const handleAddItem: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setIsAddItemModalDisplaying(true);
  };

  return (
    <CenteringDiv>
      <Heading1>{toDoList?.name || "To-do List"}</Heading1>
      <ListContainer> {listItems}</ListContainer>

      <AddIconContainer onClick={handleAddItem}>
        <AddIcon />
      </AddIconContainer>

      <TransparentLongButton isDelete onClick={openRemoveCheckmarksModal}>
        Remove checkmarks
      </TransparentLongButton>

      {isRemoveCheckmarksModalDisplaying && (
        <RemoveCheckmarcksModal
          type="todo"
          handleClose={closeRemoveCheckmarksModal}
        />
      )}

      {isAddItemModalDisplaying && (
        <Modal handleClose={closeAddItemModal}>
          <ModalContent heading="Add item">
            <AddToDoItemModalBody handleClose={closeAddItemModal} />
          </ModalContent>
        </Modal>
      )}
    </CenteringDiv>
  );
};

export default ToDoList;

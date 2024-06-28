import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Modal from "../..";
import { removeCheckmarks } from "../../../../../pages/packing-checklist/ui/packingChecklistSlice/packingChecklistSlice";
import { removeToDoCheckmarks } from "../../../../../pages/to-do-list/ui/toDoListSlice/toDoListSlice";
import ModalContent from "../../modal-text-container";
import { ModalButton } from "../../styled";
import { RemoveCheckmarcksModalProps } from "./types";

const RemoveCheckmarcksModal: React.FC<RemoveCheckmarcksModalProps> = ({
  handleClose,
  type,
}) => {
  const { listId } = useParams();
  const { checklistId } = useParams();
  const dispatch = useDispatch();

  const handleClick = (): void => {
    switch (type) {
      case "todo":
        dispatch(removeToDoCheckmarks(listId || ""));
        break;

      default:
        dispatch(removeCheckmarks({ checklistId }));
        break;
    }
    handleClose();
  };

  return (
    <Modal handleClose={handleClose}>
      <ModalContent heading="Are you sure you want to remove all checkmarks?"></ModalContent>
      <ModalButton isDelete onClick={handleClick}>
        Yes
      </ModalButton>
    </Modal>
  );
};

export default RemoveCheckmarcksModal;

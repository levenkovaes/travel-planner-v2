import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Modal from "../..";
import { removeCheckmarks } from "../../../../../pages/packing-checklist/ui/packingChecklistSlice/packingChecklistSlice";
import ModalContent from "../../modal-text-container";
import { ModalButton } from "../../styled";
import { RemoveCheckmarcksModalProps } from "./types";
import { removeToDoCheckmarks } from "../../../../../pages/to-do-list/ui/toDoListSlice/toDoListSlice";

const RemoveCheckmarcksModal: React.FC<RemoveCheckmarcksModalProps> = ({
  handleClose,
  type,
}) => {
  const { listId } = useParams();
  const { checklistId } = useParams();
  const dispatch = useDispatch();

  // TODO
  const handleClick =
    type === "todo"
      ? () => {
          dispatch(removeToDoCheckmarks(listId || ""));
          handleClose();
        }
      : () => {
          dispatch(removeCheckmarks({ checklistId }));
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

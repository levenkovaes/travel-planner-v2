import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Modal from "../..";
import { removeCheckmarks } from "../../../../../pages/packing-checklist/ui/packingChecklistSlice/packingChecklistSlice";
import { Button } from "../../../button";
import ModalContent from "../../modal-text-container";
import { RemoveCheckmarcksModalProps } from "./types";
import { ModalButton } from "../../styled";

const RemoveCheckmarcksModal: React.FC<RemoveCheckmarcksModalProps> = ({
  handleClose,
}) => {
  const dispatch = useDispatch();
  const { checklistId } = useParams();

  const handleClick = () => {
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

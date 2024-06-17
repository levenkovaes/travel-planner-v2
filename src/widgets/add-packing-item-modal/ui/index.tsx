import React from "react";

import Modal from "../../../shared/ui/modal";
import ModalContent from "../../../shared/ui/modal/modal-text-container";
import AddPackingItemModalBody from "./modal-body/ui";
import { AddItemModalProps } from "./types";

const AddPackingItemModal: React.FC<AddItemModalProps> = ({
  handleClose,
  selectedGroupName,
}) => {
  return (
    <Modal handleClose={handleClose}>
      <ModalContent heading="Add item">
        <AddPackingItemModalBody
          handleClose={handleClose}
          selectedGroupName={selectedGroupName}
        />
      </ModalContent>
    </Modal>
  );
};

export default AddPackingItemModal;

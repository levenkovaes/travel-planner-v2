import Modal from "../../../shared/ui/modal";
import ModalContent from "../../../shared/ui/modal/modal-text-container";
import EditPackingItemModalBody from "./modal-body";
import { EditItemModalProps } from "./types";

const EditPackingItemModal: React.FC<EditItemModalProps> = ({
  handleClose,
  item,
  groupName,
}) => {
  return (
    <Modal handleClose={handleClose}>
      <ModalContent heading="Edit item">
        <EditPackingItemModalBody
          handleClose={handleClose}
          item={item}
          groupName={groupName}
        />
      </ModalContent>
    </Modal>
  );
};

export default EditPackingItemModal;

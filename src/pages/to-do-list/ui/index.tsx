import React, { MouseEventHandler, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ToDoItem from "../../../entities/to-do-item/ui";
import AddIcon from "../../../shared/ui/assets/icons/add-small.svg";
import { TransparentLongButton } from "../../../shared/ui/button";
import CenteringDiv from "../../../shared/ui/centering-div";
import ErrorMessage from "../../../shared/ui/error-message";
import Modal from "../../../shared/ui/modal";
import RemoveCheckmarcksModal from "../../../shared/ui/modal/modal-content/remove-checkmarks-modal";
import ModalContent from "../../../shared/ui/modal/modal-text-container";
import AddToDoItemModalBody from "../../../widgets/add-to-do-item-modal-body/ui";
import {
  AddIconContainer,
  EditForm,
  EditInput,
  ListContainer,
  ListHeading,
  ListHeadingContainer,
} from "./styled";
import { editTitle, selectToDoListById } from "./toDoListSlice/toDoListSlice";
import { IFormValues } from "./types";

const ToDoList: React.FC = () => {
  const { listId } = useParams();
  const dispatch = useDispatch();
  const toDoList = useSelector(selectToDoListById(listId || ""));
  const [isAddItemModalDisplaying, setIsAddItemModalDisplaying] =
    useState<boolean>(false);
  const [
    isRemoveCheckmarksModalDisplaying,
    setIsRemoveCheckmarksModalDisplaying,
  ] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const title: string = toDoList?.name || "Sorry, checklist not found";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    mode: "onChange",
    defaultValues: {
      title: title,
    },
  });

  const openRemoveCheckmarksModal = (): void => {
    setIsRemoveCheckmarksModalDisplaying(true);
  };

  const closeRemoveCheckmarksModal = (): void => {
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
  }, [toDoList, listId]);

  const closeAddItemModal = (): void => {
    if (isAddItemModalDisplaying) {
      setIsAddItemModalDisplaying(false);
    }
  };

  const handleAddItem: MouseEventHandler<HTMLButtonElement> = (e): void => {
    e.preventDefault();
    setIsAddItemModalDisplaying(true);
  };

  const handleEditStart = (): void => {
    setIsEditing(true);
  };

  const handleEditFormSubmit: SubmitHandler<IFormValues> = (data): void => {
    dispatch(
      editTitle({
        title: String(data.title),
        checklistId: listId,
      })
    );

    setIsEditing(false);
  };

  return (
    <CenteringDiv>
      <ListHeadingContainer>
        {isEditing && toDoList ? (
          <EditForm onSubmit={handleSubmit(handleEditFormSubmit)}>
            <EditInput
              placeholder={title}
              {...register("title", {
                required: "List name is required",
                maxLength: {
                  value: 40,
                  message: "Name is too long",
                },
              })}
              autoFocus
              type="text"
              id="item"
              $error={!!errors.title}
            />
            {errors.title && (
              <ErrorMessage>
                <span>{errors.title.message}&nbsp;</span>
                <span>
                  {errors.title.type === "maxLength" &&
                    `${errors.title.ref?.value.length}/40`}
                </span>
              </ErrorMessage>
            )}
          </EditForm>
        ) : (
          <ListHeading onClick={handleEditStart}>{title}</ListHeading>
        )}
      </ListHeadingContainer>

      {toDoList && (
        <>
          <ListContainer> {listItems}</ListContainer>
          <AddIconContainer aria-label="Add item" onClick={handleAddItem}>
            <AddIcon />
          </AddIconContainer>
          <TransparentLongButton isDelete onClick={openRemoveCheckmarksModal}>
            Remove checkmarks
          </TransparentLongButton>
        </>
      )}

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

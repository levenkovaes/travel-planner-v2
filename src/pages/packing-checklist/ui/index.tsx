import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { nanoid } from "@reduxjs/toolkit";

import {
  ChecklistButtonWrapper,
  LongButton,
  TransparentLongButton,
} from "../../../shared/ui/button";
import CenteringDiv from "../../../shared/ui/centering-div";
import ErrorMessage from "../../../shared/ui/error-message";
import { Grid } from "../../../shared/ui/grid";
import RemoveCheckmarcksModal from "../../../shared/ui/modal/modal-content/remove-checkmarks-modal";
import PackingItemGroup from "../../../widgets/packing-item-group/ui";
import {
  editPackingListTitle,
  selectChecklistById,
} from "./packingChecklistSlice/packingChecklistSlice";
import {
  EditForm,
  EditInput,
  ListHeading,
  ListHeadingContainer,
} from "./styled";
import { IFormValues } from "./types";
import { SubmitHandler, useForm } from "react-hook-form";

const PackingChecklist = () => {
  const dispatch = useDispatch();
  const { checklistId } = useParams();
  const checklist = useSelector(selectChecklistById(checklistId));
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const title = checklist?.name || "Sorry, checklist not found";

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, dirtyFields },
  } = useForm<IFormValues>({
    mode: "onChange",
    defaultValues: {
      title: title,
    },
  });

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

  const print = () => window.print();

  const checklistBody = useMemo(() => {
    if (checklist) {
      return Object.entries(checklist.categories).map((el) => (
        <PackingItemGroup key={nanoid()} group={el} />
      ));
    }
  }, [checklist]);

  const handleEditStart = () => {
    setIsEditing(true);
  };

  const handleEditFormSubmit: SubmitHandler<IFormValues> = (data) => {
    dispatch(
      editPackingListTitle({
        title: String(data.title),
        checklistId,
      })
    );

    setIsEditing(false);
  };

  return (
    <CenteringDiv>
      <ListHeadingContainer>
        {isEditing && checklist ? (
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

      {checklistBody && (
        <>
          <Grid>{checklistBody}</Grid>

          <ChecklistButtonWrapper>
            <LongButton onClick={print}>Print checklist</LongButton>
            <TransparentLongButton isDelete onClick={openRemoveCheckmarksModal}>
              Remove checkmarks
            </TransparentLongButton>
          </ChecklistButtonWrapper>
        </>
      )}

      {isRemoveCheckmarksModalDisplaying && (
        <RemoveCheckmarcksModal handleClose={closeRemoveCheckmarksModal} />
      )}
    </CenteringDiv>
  );
};

export default PackingChecklist;

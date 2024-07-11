import React, { ReactElement, useMemo, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import useClickOutside from "../../../shared/hooks/useClickOutside";
import Icon from "../../../shared/ui/assets/icons/add.svg";
import { TransparentLongButton } from "../../../shared/ui/button";
import ErrorMessage from "../../../shared/ui/error-message";
import PlannerItem from "../../../widgets/planner-item";
import PlannerItemForm from "../../../widgets/planner-item-form/ui";
import {
  addPlannerItem,
  clearPlanner,
  editTitle,
  selectPlannerById,
} from "./plannerSlice/plannerSlice";
import {
  AddButton,
  AddItemContainer,
  ButtonContainer,
  EditForm,
  EditInput,
  ListHeading,
  ListHeadingContainer,
  PlannerContainer,
  PlannerContent,
  TimelineContainer,
} from "./styled";
import { IFormValues } from "./types";

const Planner: React.FC = () => {
  const dispatch = useDispatch();
  const { plannerId } = useParams();
  const planner = useSelector(selectPlannerById(plannerId));
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const plannerTitle: string = planner?.name || "Sorry, planner not found";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    mode: "onChange",
    defaultValues: {
      title: plannerTitle,
    },
  });

  const clickRef = useRef<HTMLDivElement | null>(null);

  const toggleAddItemWidget = (): void => {
    setIsAdding((prev) => !prev);
  };

  const closeAddItemWidget = (): void => {
    setIsAdding((prev) => {
      if (prev) {
        return false;
      }

      return prev;
    });
  };

  useClickOutside(clickRef, closeAddItemWidget);

  const plannerItems = useMemo((): ReactElement[] | undefined => {
    if (planner) {
      return planner.plannerItems.map((item, index) => (
        <PlannerItem item={item} count={index + 1} key={item.id} />
      ));
    }
  }, [planner]);

  const handleClearPlanner = (): void => {
    dispatch(clearPlanner(plannerId));
  };

  const handleEditStart = (): void => {
    setIsEditing(true);
  };

  const handleEditFormSubmit: SubmitHandler<IFormValues> = (data): void => {
    dispatch(
      editTitle({
        title: String(data.title),
        plannerId: plannerId,
      })
    );

    setIsEditing(false);
  };

  return (
    <PlannerContainer isAdding={isAdding}>
      <ListHeadingContainer>
        {isEditing && planner ? (
          <EditForm onSubmit={handleSubmit(handleEditFormSubmit)}>
            <EditInput
              placeholder={plannerTitle}
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
          <ListHeading onClick={handleEditStart}>{plannerTitle}</ListHeading>
        )}
      </ListHeadingContainer>
      {planner && (
        <>
          <PlannerContent isEmpty={planner.plannerItems.length === 0}>
            <TimelineContainer>{plannerItems}</TimelineContainer>
            <AddItemContainer isAdding={isAdding} ref={clickRef}>
              <AddButton onClick={toggleAddItemWidget}>
                <AddIcon />
              </AddButton>

              {isAdding && (
                <PlannerItemForm
                  action={addPlannerItem}
                  handleClose={closeAddItemWidget}
                />
              )}
            </AddItemContainer>
          </PlannerContent>
          <ButtonContainer>
            <TransparentLongButton isDelete onClick={handleClearPlanner}>
              Clear
            </TransparentLongButton>
          </ButtonContainer>
        </>
      )}
    </PlannerContainer>
  );
};

const AddIcon = styled(Icon)`
  width: 32px;
  height: auto;
`;

export default Planner;

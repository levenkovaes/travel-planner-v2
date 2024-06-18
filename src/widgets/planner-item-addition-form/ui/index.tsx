import React from "react";
import { DayPicker } from "react-day-picker";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { addPlannerItem } from "../../../pages/planner/ui/plannerSlice/plannerSlice";
import { LongButton } from "../../../shared/ui/button";
import ErrorMessage from "../../../shared/ui/error-message";
import Input from "../../../shared/ui/input";
import CloseIcon from "../../../shared/ui/modal/assets/close_40.svg";
import { Form, FormBackdrop, FormCloseButton, FormContainer } from "./styled";
import { PlannerItemAdditionFormProps, PlannerItemFormValues } from "./types";

const PlannerItemAdditionForm: React.FC<PlannerItemAdditionFormProps> = ({
  handleClose,
}) => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<PlannerItemFormValues>({
    defaultValues: {
      date: new Date(),
      place: "",
      activities: "",
    },
  });

  const handlePlannerFormSubmit = (data: PlannerItemFormValues) => {
    dispatch(addPlannerItem(data));
    handleClose();
  };

  const handleBackdropClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    e.preventDefault();
    e.stopPropagation();
    handleClose();
  };

  return (
    <>
      <FormBackdrop onClick={(e) => handleBackdropClick(e)} />
      <FormContainer>
        <Form onSubmit={handleSubmit(handlePlannerFormSubmit)}>
          <FormCloseButton type="button" onClick={handleClose}>
            <CloseIcon />
          </FormCloseButton>
          <Controller
            control={control}
            name="date"
            rules={{
              required: "Date is required",
            }}
            render={({ field: { onChange, value, ref } }) => (
              <DayPicker
                mode="single"
                required
                selected={value}
                onSelect={onChange}
              />
            )}
          />
          {errors.date && <ErrorMessage>{errors.date.message}</ErrorMessage>}

          <Input
            {...register("place", {
              required: "This field is required",
              maxLength: {
                value: 40,
                message: "Name is too long",
              },
            })}
            placeholder="Place"
          ></Input>
          {errors.place && <ErrorMessage>{errors.place.message}</ErrorMessage>}
          <Input
            {...register("activities", {
              required: "This field is required",
              maxLength: {
                value: 400,
                message: "Text is too long",
              },
            })}
            as="textarea"
            placeholder="Activities"
          ></Input>
          {errors.activities && (
            <ErrorMessage>{errors.activities.message}</ErrorMessage>
          )}
          <LongButton
            type="submit"
            disabled={!!errors.date || !!errors.place || !!errors.activities}
          >
            Save
          </LongButton>
        </Form>
      </FormContainer>
    </>
  );
};

export default PlannerItemAdditionForm;

import React from "react";
import { DayPicker } from "react-day-picker";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { LongButton } from "../../../shared/ui/button";
import ErrorMessage from "../../../shared/ui/error-message";
import Input from "../../../shared/ui/input";
import CloseIcon from "../../../shared/ui/modal/assets/close_40.svg";
import { Form, FormBackdrop, FormCloseButton, FormContainer } from "./styled";
import { PlannerItemFormProps, PlannerItemFormValues } from "./types";

const PlannerItemForm: React.FC<PlannerItemFormProps> = ({
  item = {
    date: new Date(),
    place: "",
    activities: "",
  },
  reducer,
  handleClose,
}) => {
  const dispatch = useDispatch();
  const { plannerId } = useParams();

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<PlannerItemFormValues>({
    defaultValues: {
      date: item.date,
      place: item.place,
      activities: item.activities,
    },
  });

  const handlePlannerFormSubmit = (data: PlannerItemFormValues) => {
    if (item.id) {
      dispatch(reducer({ plannerId, item: data, itemId: item.id }));
    } else {
      dispatch(reducer({ plannerId, item: data }));
    }
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
                selected={new Date(value)}
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

export default PlannerItemForm;

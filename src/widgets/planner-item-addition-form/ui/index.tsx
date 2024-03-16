import React from "react";
import { DayPicker } from "react-day-picker";
import { Controller, useForm } from "react-hook-form";

import { LongButton } from "../../../shared/ui/button";
import ErrorMessage from "../../../shared/ui/error-message";
import Input from "../../../shared/ui/input";
import { Form, FormContainer } from "./styled";
import { FormValues } from "./types";

export const PlannerItemAdditionForm = ({ handleClose }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    defaultValues: {
      date: new Date(),
      place: "",
      activities: "",
    },
  });

  const handlePlannerFormSubmit = (data: FormValues) => {
    console.log(data);
    handleClose();
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(handlePlannerFormSubmit)}>
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
  );
};

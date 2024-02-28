import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { nanoid } from "@reduxjs/toolkit";

import ChecklistCreationFormSelect from "../../../entities/checklist-creation-form-select/ui";
import { LongButton } from "../../../shared/ui/button";
import ErrorMessage from "../../../shared/ui/error-message";
import Input from "../../../shared/ui/input";
import { Paragraph } from "../../../shared/ui/typography";
import {
  DESTINATION_OPTIONS,
  FORM_DEFAULT_VALUES,
  SEASON_OPTIONS,
} from "./constants";
import { ChecklistCreationForm } from "./styled";
import { IFormValues } from "./types";
import { addChecklist } from "../../../pages/packing-checklist/ui/packingChecklistSlice/packingChecklistSlice";

const PackingChecklistCreationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isDirty },
  } = useForm<IFormValues>({
    mode: "onChange",
    defaultValues: FORM_DEFAULT_VALUES,
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data);

    const dataForChecklist = {
      checklistName: data.checklistName,
      id: nanoid(),
      isDefault: !isDirty,
      numberOfDays: Number(data.numberOfDays),
      season: data.season,
      destination: data.destination,
    };

    reset();

    dispatch(addChecklist(dataForChecklist));
    navigate(`/packing-checklists/${dataForChecklist.id}`);
  };

  return (
    <ChecklistCreationForm onSubmit={handleSubmit(onSubmit)}>
      <Paragraph as="label" htmlFor="checklistName">
        Checklist name
      </Paragraph>
      <Input
        {...register("checklistName", {
          maxLength: {
            value: 40,
            message: "Name is too long",
          },
        })}
        autoFocus
        type="text"
        id="checklistName"
        placeholder="New checklist"
        $error={!!errors.checklistName}
      />
      {errors.checklistName && (
        <ErrorMessage>
          <span>{errors.checklistName.message} </span>
          <span>{`${errors.checklistName.ref?.value.length}/40`}</span>
        </ErrorMessage>
      )}

      <Paragraph as="label" htmlFor="numberOfDays">
        Number of days
      </Paragraph>
      <Input
        {...register("numberOfDays", {
          min: {
            value: 0,
            message: "Minimum allowed number to enter is 0",
          },
          max: {
            value: 365,
            message: "Maximum allowed number to enter is 365",
          },
        })}
        type="number"
        id="numberOfDays"
        step={1}
        placeholder="0"
        $error={!!errors.numberOfDays}
      />
      {errors.numberOfDays && (
        <ErrorMessage>{errors.numberOfDays.message}</ErrorMessage>
      )}

      <Paragraph as="label" htmlFor="season">
        Season
      </Paragraph>
      <ChecklistCreationFormSelect
        control={control}
        name="season"
        options={SEASON_OPTIONS}
      />

      <Paragraph as="label" htmlFor="destination">
        Destination
      </Paragraph>
      <ChecklistCreationFormSelect
        control={control}
        name="destination"
        options={DESTINATION_OPTIONS}
      />

      <LongButton
        type="submit"
        disabled={!!errors.checklistName || !!errors.numberOfDays}
      >
        {isDirty ? "Create" : "Create default"}
      </LongButton>
    </ChecklistCreationForm>
  );
};
export default PackingChecklistCreationForm;

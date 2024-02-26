import React from "react";
import { Controller } from "react-hook-form";

import CustomSelect from "../../../shared/ui/custom-select";
import { AddPackingItemFormSelectProps } from "./types";

const AddPackingItemFormSelect: React.FC<AddPackingItemFormSelectProps> = ({
  control,
  name,
  options,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field: { onChange, value } }) => (
        <CustomSelect
          options={options}
          value={value}
          onChange={onChange}
        ></CustomSelect>
      )}
    />
  );
};

export default AddPackingItemFormSelect;

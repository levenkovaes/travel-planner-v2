import React, { useState } from "react";

import { nanoid } from "@reduxjs/toolkit";

import { DropdownContainer, Option, Select } from "./styled";
import { CustomSelectProps } from "./types";

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const onOptionClick = (selectedOption: string) => {
    value = selectedOption;
    onChange(selectedOption);
  };

  return (
    <Select isOpen={isOpen} onClick={handleToggle}>
      {value}
      {isOpen && (
        <DropdownContainer>
          {options.map((option) => (
            <Option
              key={nanoid()}
              onClick={() => onOptionClick(option)}
              isSelected={option === value}
            >
              {option}
            </Option>
          ))}
        </DropdownContainer>
      )}
    </Select>
  );
};

export default CustomSelect;

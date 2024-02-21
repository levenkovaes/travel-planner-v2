import React, { useState } from "react";

import { nanoid } from "@reduxjs/toolkit";

import { DropdownContainer, Option, Select, SelectWrapper } from "./styled";
import { CustomSelectProps } from "./types";
import useClickOutside from "../../hooks/useClickOutside";

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const clickRef = React.useRef<HTMLDivElement | null>(null);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useClickOutside(clickRef, handleClose);

  const onOptionClick = (selectedOption: string) => {
    value = selectedOption;
    onChange(selectedOption);
    handleClose();
  };

  return (
    <SelectWrapper ref={clickRef}>
      <Select isOpen={isOpen} onClick={handleOpen}>
        {value}
      </Select>
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
    </SelectWrapper>
  );
};

export default CustomSelect;

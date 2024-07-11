import React, { useState } from "react";

import { nanoid } from "@reduxjs/toolkit";

import useClickOutside from "../../hooks/useClickOutside";
import MoreIcon from "./assets/expand_more_40.svg";
import {
  DropdownContainer,
  IconContainer,
  Option,
  Select,
  SelectWrapper,
} from "./styled";
import { CustomSelectProps } from "./types";

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const clickRef = React.useRef<HTMLDivElement | null>(null);

  const handleOpen = (): void => {
    setIsOpen(true);
  };

  const handleClose = (): void => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useClickOutside(clickRef, handleClose);

  const onOptionClick = (selectedOption: string): void => {
    value = selectedOption;
    onChange(selectedOption);
    handleClose();
  };

  return (
    <SelectWrapper ref={clickRef}>
      <Select isOpen={isOpen} onClick={handleOpen}>
        {value}
        <IconContainer isOpen={isOpen}>
          <MoreIcon />
        </IconContainer>
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

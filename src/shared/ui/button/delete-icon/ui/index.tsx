import React from "react";

import DeleteIcon from "./assets/delete.svg";
import { TransparentDeleteIconButton } from "./styled";
import { DeleteIconButtonProps } from "./types";

export const DeleteIconButton: React.FC<DeleteIconButtonProps> = ({
  handleClick,
}) => {
  return (
    <TransparentDeleteIconButton aria-label="Delete item" onClick={handleClick}>
      <DeleteIcon />
    </TransparentDeleteIconButton>
  );
};

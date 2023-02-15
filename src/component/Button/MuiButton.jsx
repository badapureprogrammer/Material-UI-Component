import React from "react";
import { Button } from "@mui/material";

const MuiButton = (props) => {
  return (
    <Button
      size={`${props.size}`}
      color={`${props.color}`}
      variant={`${props.variant}`}
      disabled={props.isDisable}
      onClick={props.handleClick}
      className={`${props.className}`}
    >
      {props.children}
    </Button>
  );
};

export default MuiButton;

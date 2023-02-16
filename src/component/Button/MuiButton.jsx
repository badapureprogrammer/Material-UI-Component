import React from "react";
import { Button } from "@mui/material";

const MuiButton = (props) => {
  const { size, color, variant, isDisable, handleClick, className } = props;

  return (
    <Button size={size} color={color} variant={variant} disabled={isDisable} onClick={handleClick} className={className}>
      {props.children}
    </Button>
  );
};

export default MuiButton;

// Example Use This
// <MuiButton size={"small"} color={"secondary"} variant={"contained"} isDisable={false} handleClick={printConsole}> Click Me </MuiButton>

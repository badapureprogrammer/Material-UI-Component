import React from "react";
import { Button } from "@mui/material";

const MuiButton = (props) => {
  const { size, color, variant, isDisable, handleClick, className,children } = props;

  return (
    <Button size={size} color={color} variant={variant} disabled={isDisable} onClick={handleClick} className={className}>
      {children}
    </Button>
  );
};

export default MuiButton;

//  Use This Example 
// <MuiButton size={"small"} color={"secondary"} variant={"contained"} isDisable={false} handleClick={printConsole}> Click Me </MuiButton>

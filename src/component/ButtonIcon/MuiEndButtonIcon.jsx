import React from "react";
import { Button, Stack } from "@mui/material";

const MuiEndButtonIcon = (props) => {
  const {
    color,
    endIcon,
    variant,
    children,
    isDisable,
    className,
    handleClick,
  } = props;

  return (
    <Stack spacing={2} direction="row">
      <Button
        color={color}
        endIcon={endIcon}
        variant={variant}
        disabled={isDisable}
        onClick={handleClick}
        className={className}
      >
        {children}
      </Button>
    </Stack>
  );
};

export default MuiEndButtonIcon;

// Example Use This
// <MuiEndButtonIcon color={"error"} variant={"contained"} endIcon={<SendIcon/>} isDisable={false} handleClick={printConsole}> Send </MuiEndButtonIcon>

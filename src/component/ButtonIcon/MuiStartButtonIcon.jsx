import React from "react";
import { Button, Stack } from "@mui/material";

const MuiStartButtonIcon = (props) => {
  const {
    color,
    variant,
    children,
    isDisable,
    startIcon,
    className,
    handleClick,
  } = props;

  return (
    <Stack spacing={2} direction="row">
      <Button
        color={color}
        variant={variant}
        disabled={isDisable}
        startIcon={startIcon}
        onClick={handleClick}
        className={className}
      >
        {children}
      </Button>
    </Stack>
  );
};
export default MuiStartButtonIcon;

// Example Use This
// <MuiStartButtonIcon color={"success"} variant={"outlined"} startIcon={<SendIcon />} isDisable={false} handleClick={printConsole} > Send </MuiStartButtonIcon>

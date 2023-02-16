import React from "react";
import { IconButton, Stack } from "@mui/material";

const MuiButtonIcon = (props) => {
  const { color, isDisable, handleClick, className, btnIcon } = props;

  return (
    <Stack spacing={2} direction="row">
      <IconButton color={color} onClick={handleClick} disabled={isDisable} className={className} >
        {btnIcon}
      </IconButton>
    </Stack>
  );
};

export default MuiButtonIcon;

// Example Use This
// <MuiButtonIcon color={"error"} handleClick={printConsole} isDisable={false} btnIcon={<SendIcon />} /> 


import React from "react";
import { IconButton, Stack } from "@mui/material";

const MuiButtonIcon = (props) => {
  return (
    <Stack spacing={2} direction="row">
      <IconButton
        color={props.color}
        onClick={props.handleClick}
        disabled={props.isDisable}
        className={props.className}
      >
        {props.btnIcon}
      </IconButton>
    </Stack>
  );
};
export default MuiButtonIcon;

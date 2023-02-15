import React from "react";
import { Button, Stack } from "@mui/material";

const MuiStartButtonIcon = (props) => {
  return (
    <Stack spacing={2} direction="row">
      <Button
        size={props.size}
        color={props.color}
        variant={props.variant}
        disabled={props.isDisable}
        startIcon={props.startIcon}
        onClick={props.handleClick}
        className={props.className}
      >
        {props.btnText}
      </Button>
    </Stack>
  );
};
export default MuiStartButtonIcon;

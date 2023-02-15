import React from "react";
import { Button, Stack } from "@mui/material";

const MuiEndButtonIcon = (props) => {
  return (
    <Stack spacing={2} direction="row">
      <Button
        size={props.size}
        color={props.color}
        endIcon={props.endIcon}
        variant={props.variant}
        disabled={props.isDisable}
        onClick={props.handleClick}
        className={props.className}
      >
        {props.btnText}
      </Button>
    </Stack>
  );
};
export default MuiEndButtonIcon;

import React, { useState } from "react";
import { TextField } from "@mui/material";

const MuiTextField = (props) => {
  const takeDisabledFlag = props.disabled;

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <TextField
      value={value}
      size={props.size}
      type={props.type}
      color={props.color}
      label={props.label}
      variant={props.variant}
      onChange={handleChange}
      disabled={takeDisabledFlag}
      helperText={props.helperText}
      className={props.className}
    />
  );
};

export default MuiTextField;

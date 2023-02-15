import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";

export const MuiEndAdormentTextField = (props) => {
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
      className={props.className}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">{props.symbol}</InputAdornment>
        ),
      }}
    />
  );
};

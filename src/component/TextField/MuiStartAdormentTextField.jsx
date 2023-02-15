import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";

const MuiStartAdormentTextField = (props) => {
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
        startAdornment: (
          <InputAdornment position="start">{props.symbol}</InputAdornment>
        ),
      }}
    />
  );
};

export default MuiStartAdormentTextField;
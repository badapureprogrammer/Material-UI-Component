import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";

const MuiEndAdormentTextField = (props) => {

  const { size, type, color, label, variant, className, icon } = props;

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };
  return (
    <TextField value={value} size={size} type={type} color={color} label={label} variant={variant} onChange={handleChange} className={className}
      InputProps={{
        endAdornment: <InputAdornment position="end">{icon}</InputAdornment>,
      }}
    />
  );
};

export default MuiEndAdormentTextField;

//  Use This Example
// <MuiEndAdormentTextField size={"small"} type={"password"} color={"error"} label={"Password"} variant={"outlined"} icon={<LockIcon/>}/>
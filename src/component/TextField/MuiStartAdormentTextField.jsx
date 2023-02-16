import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";

const MuiStartAdormentTextField = (props) => {

  const { size, type, color, label, variant, className, icon } = props;

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <TextField value={value} size={size} type={type} color={color} label={label} variant={variant} onChange={handleChange} className={className}
      InputProps={{
        startAdornment: ( <InputAdornment position="start">{icon}</InputAdornment>),
      }}
    />
  );
};

export default MuiStartAdormentTextField;

//  Use This Example
// <MuiStartAdormentTextField size={"small"} type={"password"} color={"error"} label={"Password"} variant={"outlined"} icon={<LockIcon/>}/>
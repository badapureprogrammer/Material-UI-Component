import React, { useState } from "react";
import { TextField } from "@mui/material";

const MuiTextField = (props) => {

  const {size,type,color,label,variant,isDisabled,helperText,className} = props;

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <TextField value={value} size={size} type={type} color={color} label={label} variant={variant} onChange={handleChange} disabled={isDisabled} helperText={helperText} className={className} />
  );
};

export default MuiTextField;

//  Use This Example
//  <MuiTextField size={"small"} type={"number"} color={"error"} label={"Contact Number"} variant={"standard"} isDisabled={true} helperText={"Plese Enter a Vlaid Number"}/>
import React, { useState } from "react";
import {
  Box,
  Radio,
  FormLabel,
  RadioGroup,
  FormControl,
  FormHelperText,
  FormControlLabel,
} from "@mui/material";

const MuiRedioButton = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
  };
  return (
    <Box>
      <FormControl error={props.isError}>
        <FormLabel>{props.formLabel}</FormLabel>
        <RadioGroup value={value} onChange={handleChange} row={props.isRow}>
          {props.menuList.map(({ value, name }) => (
            <FormControlLabel
              control={
                <Radio
                  size={props.size}
                  color={props.color}
                  className={props.className}
                />
              }
              key={value}
              label={name}
              value={value}
            />
          ))}
        </RadioGroup>
        <FormHelperText>{props.helperText}</FormHelperText>
      </FormControl>
    </Box>
  );
};
export default MuiRedioButton;

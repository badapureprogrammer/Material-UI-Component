import React, { useState } from "react";
import {Box,Radio,FormLabel,RadioGroup,FormControl,FormHelperText,FormControlLabel} from "@mui/material";

const MuiRedioButton = (props) => {
  const {isError,formLabel,isRow,menuList,size,color,className,helperText} = props;

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setValue(value)
  };

  return (
    <Box>
      <FormControl error={isError}>
        <FormLabel>{formLabel}</FormLabel>
        <RadioGroup value={value} onChange={handleChange} row={isRow}>
          {menuList.map(({ value, name }, index) => (
            <FormControlLabel
              control={
                <Radio size={size} color={color} className={className} />
              }
              key={index} label={name} value={value}
            />
          ))}
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRedioButton;

//  Use This Example
// const subjectList = [
//   { value: "marathi", name: "Marathi"},
//   { value: "english", name: "English"},
// ];
// <MuiRedioButton isError={false} formLabel={"Subject"} isRow={false} menuList={subjectList} size={"small"} color={"error"} helperText={"Choose your favourite subject"} />
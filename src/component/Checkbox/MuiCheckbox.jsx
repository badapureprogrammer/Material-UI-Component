import React, { useState } from "react";
import { Box, FormControlLabel, Checkbox } from "@mui/material";

const MuiCheckbox = (props) => {
  const { label, size, color, isDisable, className } = props;

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    const value = event.target.checked;
    setIsChecked(value);
  };
  return (
    <Box>
      <FormControlLabel label={label}
        control={
          <Checkbox size={size} color={color} checked={isChecked} disabled={isDisable} onChange={handleChange} className={className}/>
        }
      />
    </Box>
  );
};
export default MuiCheckbox;

//  Use This Example 
// <MuiCheckbox label={"Status"} size={"small"} color={"error"} isDisable={false}/>
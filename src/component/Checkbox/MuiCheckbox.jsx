import React, { useState } from "react";
import { Box, FormControlLabel, Checkbox } from "@mui/material";

const MuiCheckbox = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    console.log(isChecked);
  };
  return (
    <Box>
      <FormControlLabel
        label={props.label}
        control={
          <Checkbox
            size={props.size}
            color={props.color}
            checked={isChecked}
            disabled={props.isDisable}
            onChange={handleChange}
            className={props.className}
          />
        }
      />
    </Box>
  );
};
export default MuiCheckbox;

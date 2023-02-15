import React, { useState } from "react";
import { Box, Checkbox } from "@mui/material";

const MuiCheckboxIcon = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    console.log(isChecked);
  };
  return (
    <Box>
      <Checkbox
        size={props.size}
        color={props.color}
        checked={isChecked}
        icon={props.borderIcon}
        checkedIcon={props.icon}
        onChange={handleChange}
        disabled={props.isDisable}
        className={props.className}
      />
    </Box>
  );
};
export default MuiCheckboxIcon;

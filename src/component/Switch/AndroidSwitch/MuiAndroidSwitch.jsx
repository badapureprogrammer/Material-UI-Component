import React, { useState } from "react";
import { Box, FormControlLabel } from "@mui/material";
import { AndroidSwitch } from "./MuiAndroidSwitchStyle";

const MuiAndroidSwitch = (props) => {
  const { label, labelDirection } = props;

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    const value = e.target.checked;
    setChecked(value);
  };

  return (
    <Box>
      <FormControlLabel
        label={label}
        labelPlacement={labelDirection}
        control={<AndroidSwitch checked={checked} onChange={handleChange} />}
      />
    </Box>
  );
};

export default MuiAndroidSwitch;

//  Use This Example
// <MuiAndroidSwitch label={"Status"} labelDirection={"top"}/>

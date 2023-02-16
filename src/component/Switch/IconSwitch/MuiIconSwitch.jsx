import React, { useState } from "react";
import { Box, FormControlLabel } from "@mui/material";
import { MaterialUISwitch } from "./MuiIconSwitchStyle";

const MuiIconSwitch = (props) => {
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
        control={<MaterialUISwitch checked={checked} onChange={handleChange} />}
      />
    </Box>
  );
};

export default MuiIconSwitch;

//  Use This Example
// <MuiIconSwitch label={"Status"} labelDirection={"top"}/>
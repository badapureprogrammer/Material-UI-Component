import React, { useState } from "react";
import { Box, FormControlLabel, Switch } from "@mui/material";

const MuiSwitch = (props) => {

  const { label, labelDirection, color, size } = props;

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
        control={
          <Switch size={size} color={color} checked={checked} onChange={handleChange} />
        }
      />
    </Box>
  );
};

export default MuiSwitch;

//  Use This Example
// <MuiSwitch label={"Status"} labelDirection={"bottom"} color={"success"} size={"small"} />
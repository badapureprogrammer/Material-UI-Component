import React, { useState } from "react";
import { Box, FormControlLabel, Switch } from "@mui/material";

const MuiSwitch = (props) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    const value = e.target.checked;
    setChecked(value);
    // props.status(value);
  };
  return (
    <Box>
      <FormControlLabel
        label={props.label}
        control={<Switch checked={checked} onChange={handleChange} />}
      />
    </Box>
  );
};
export default MuiSwitch;

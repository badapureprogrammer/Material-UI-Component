import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

const MuiMultiSelelct = (props) => {
  const [contries, setContries] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setContries(value);
    console.log(value);
  };

  return (
    <Box width={props.boxWidth}>
      <TextField
        select
        fullWidth
        value={contries}
        size={props.size}
        color={props.color}
        label={props.label}
        onChange={handleChange}
        SelectProps={{
          multiple: true,
        }}
        helperText={props.helperText}
      >
        {props.menuList.map(({ name, value }) => (
          <MenuItem value={value} key={value}>
            {name}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};
export default MuiMultiSelelct;

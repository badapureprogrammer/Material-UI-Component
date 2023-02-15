import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

const MuiSelelct = (props) => {
  const [contry, setContry] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    // setContry(value);
  };

  return (
    <Box width={props.boxWidth}>
      <TextField
        select
        fullWidth
        value={contry}
        size={props.size}
        color={props.color}
        label={props.label}
        onChange={handleChange}
        className={props.className}
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
export default MuiSelelct;

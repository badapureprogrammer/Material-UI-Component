import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

const MuiSelelct = (props) => {
  const { boxWidth, size, color, label, className, helperText, menuList } = props;

  const [contry, setContry] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setContry(value);
  };

  return (
    <Box width={boxWidth}>
      <TextField select fullWidth value={contry} size={size} color={color} label={label} onChange={handleChange} className={className} helperText={helperText}>
        {menuList.map(({ name, value }, index) => (
          <MenuItem value={value} key={index}>
            {name}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default MuiSelelct;

//  Use This Example
// const subjectList = [
//   { value: "marathi", name: "Marathi" },
//   { value: "english", name: "English" },
// ];
// <MuiSelelct boxWidth={"300px"} size={"small"} color={"primary"} label={"Select Your Subject"} helperText={"Please Choose Your Subject"} menuList={subjectList}/>
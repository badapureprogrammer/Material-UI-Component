import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

const MuiMultiSelelct = (props) => {
  const { boxWidth, size, color, label, helperText, menuList } = props;

  const [contries, setContries] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setContries(value);
  };

  return (
    <Box width={boxWidth}>
      <TextField select fullWidth value={contries} size={size} color={color} label={label} onChange={handleChange}
        SelectProps={{ multiple: true}}
        helperText={helperText}
      >
        {menuList.map(({ name, value }, index) => (
          <MenuItem value={value} key={index}>
            {name}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default MuiMultiSelelct;

//  Use This Example
// const subjectList = [
//   { value: "marathi", name: "Marathi" },
//   { value: "english", name: "English" },
// ];
// <MuiMultiSelelct boxWidth={"300px"} size={"small"} color={"primary"} label={"Select Your Subject"} helperText={"You can choose multiple option"} menuList={subjectList} />
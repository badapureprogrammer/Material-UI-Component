import React, { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";

const MuiAutoComplete = (props) => {
  const { boxWidth, size, isMultiple, menuList, label } = props;

  const [value, setValue] = useState([]);

  const handleChange = (event, newValue) => {
    const value = event.target.innerText;
    setValue(value);
  };

  return (
    <Stack spacing={2} width={boxWidth}>
      <Autocomplete size={size} multiple={isMultiple} options={menuList}
        renderInput={(params) => <TextField {...params} label={label} />}
        value={value} onChange={handleChange}
      />
    </Stack>
  );
};

export default MuiAutoComplete;

// Use This Example
// const skills = ["HTML5", "CSS3", "Bootstrap", "Javascript", "SASS"]; Pass the value
// <MuiAutoComplete boxWidth={"350px"} size={"small"} menuList={skills} isMultiple={true} label={"Subject"}/>


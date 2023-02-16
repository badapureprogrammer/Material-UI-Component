import React, { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";

const MuiAutoComplete = (props) => {
  const skills = ["HTML5", "CSS3", "Bootstrap", "Javascript", "SASS"];

  const { boxWidth } = props;

  const [value, setValue] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={2} width={boxWidth}>
      <Autocomplete
        options={skills}
        renderInput={(params) => {
          <TextField {...params} label="skills" />;
        }}
        value={value}
        onChange={handleChange}
      />
    </Stack>
  );
};
export default MuiAutoComplete;

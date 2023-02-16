import React, { useState } from "react";
import { Stack, Rating } from "@mui/material";

const MuiRating = (props) => {

  const { size } = props;

  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={2}>
      <Rating value={value} size={size} precision={0.5} onChange={handleChange} />
    </Stack>
  );
};

export default MuiRating;

//  Use This Example
// <MuiRating size={"small"}/>


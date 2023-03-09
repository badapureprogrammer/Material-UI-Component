import React from "react";
import { Stack, CircularProgress, LinearProgress } from "@mui/material";

export const MuiCircularProgress = (props) => {

  const { color, variant, value } = props;

  return (
    <Stack spacing={2}>
      <CircularProgress color={color} variant={variant} value={value} />
    </Stack>
  );
};

export const MuiLinearProgress = (props) => {

  const { color, variant, value } = props;

  return (
    <Stack spacing={2}>
      <LinearProgress color={color} variant={variant} value={value} />
    </Stack>
  );
};

// Use This Example
// <MuiCircularProgress color={"error"}/>
// <MuiLinearProgress variant={"determinate"} value={60}/>

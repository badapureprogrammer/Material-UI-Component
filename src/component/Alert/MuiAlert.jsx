import React from "react";
import { Stack, Alert } from "@mui/material";

const MuiAlert = (props) => {

  const { severity, variant, children } = props;

  return (
    <Stack spacing={2}>
      <Alert severity={severity} variant={variant}>
        {children}
      </Alert>
    </Stack>
  );
};

export default MuiAlert;

// Use This Example
// <MuiAlert severity={"success"} variant={"filled"}><strong>Error</strong> — This is an error alert check it out!</MuiAlert>

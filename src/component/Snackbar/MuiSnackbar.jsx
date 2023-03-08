import React, { useState } from "react";
import { Snackbar, Button, Stack, Alert } from "@mui/material";

const MuiSnackbar = (props) => {

  const [open, setOpen] = useState(false);

  const { message, severity, variant, transitionEffect, vertical, horizontal } = props;

  const handleClose = (e, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <Stack spacing={2}>
      <Snackbar open={open} onClose={handleClose} autoHideDuration={4000}
        TransitionComponent={transitionEffect} // Grow Fade Slide
        anchorOrigin={{vertical: `${vertical}`, horizontal: `${horizontal}`}}>
        <Alert severity={severity} variant={variant}>{message}</Alert>
      </Snackbar>
      <Button variant="contained" onClick={() => setOpen(true)} type="button">
        Submit
      </Button>
    </Stack>
  );
};

export default MuiSnackbar;

// Use This Example
// import { Slide, Fade, Grow } from "@mui/material";
// <MuiSnackbar severity={"error"} variant={"filled"} vertical={"bottom"}horizontal={"left"} transitionEffect={Fade} message={"form has been submitted successfully"}/>
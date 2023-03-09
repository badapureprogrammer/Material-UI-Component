import React, { useState } from "react";
import { Button,Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions,Divider } from "@mui/material";

const MuiDialog = (props) => {

  const { title, message, btnTextOne, btnTextTwo } = props;

  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(true)

  return (
    <>
      <Button onClick={handleClick}>Open Dialog</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{title}</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={() => setOpen(false)}>{btnTextOne}</Button>
          <Button onClick={() => setOpen(false)}>{btnTextTwo}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MuiDialog;

// Use This Example
//<MuiDialog title={"Submit the text ?"} message={`Lorem ipsum, dolor sit amet consectetur adipisicing elit.`} btnTextOne={"Cancel"} btnTextTwo={"Remove"} />

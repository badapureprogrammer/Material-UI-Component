import React from "react";
import "./MuiGridLayoutStyle.css";
// Here Import MuiGridLayout CSS File

import { Grid } from "@mui/material";

const MuiGridLayout = () => {
  return (
    <Grid container>
      <Grid item className="demo box" xs={12} sm={6}>
        <p>Box 1</p>
      </Grid>
      <Grid item className="demo box2" xs={12} sm={6}>
        <p>Box 2</p>
      </Grid>
      <Grid item className="demo box3" xs={12} sm={6}>
        <p>Box 3</p>
      </Grid>
      <Grid item className="demo box4" xs={12} sm={6}>
        <p>Box 4</p>
      </Grid>
      <Grid item className="demo box5" xs={12} sm={6}>
        <p>Box 5</p>
      </Grid>
      <Grid item className="demo box6" xs={12} sm={6}>
        <p>Box 6</p>
      </Grid>
      <Grid item className="demo box7" xs={12} sm={6}>
        <p>Box 7</p>
      </Grid>
      <Grid item className="demo box8" xs={12} sm={6}>
        <p>Box 8</p>
      </Grid>
      <Grid item className="demo box9" xs={12} sm={6}>
        <p>Box 9</p>
      </Grid>
      <Grid item className="demo box10" xs={12} sm={6}>
        <p>Box 10</p>
      </Grid>
      <Grid item className="demo box11" xs={12} sm={6}>
        <p>Box 11</p>
      </Grid>
      <Grid item className="demo box12" xs={12} sm={6}>
        <p>Box 12</p>
      </Grid>
    </Grid>
  );
};
export default MuiGridLayout;

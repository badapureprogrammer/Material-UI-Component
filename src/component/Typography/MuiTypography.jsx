import React from "react";
import { Typography } from "@mui/material";

const MuiTypography = (props) => {
  return (
    <div>
      <Typography
        color={props.color}
        variant={props.variant}
        fontWeight={props.weight}
        className={props.className}
      >
        {props.typographyText}
      </Typography>
    </div>
  );
};
export default MuiTypography;

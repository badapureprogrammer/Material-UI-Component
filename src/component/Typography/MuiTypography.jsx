import React from "react";
import { Typography } from "@mui/material";

const MuiTypography = (props) => {
  
  const { color, variant,component, weight, className,children } = props;

  return (
    <div>
      <Typography  color={color} variant={variant} component={component} fontWeight={weight} className={className} >
        {children}
      </Typography>
    </div>
  );
};
export default MuiTypography;

//  Use This Example
// variant = ["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2",]
// <MuiTypography color={"error"} variant={"h5"} weight={300}>I want to Become Good Programer</MuiTypography>
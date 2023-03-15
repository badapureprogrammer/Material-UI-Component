import React, { useState } from "react";
import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const MuiStartLoadingButtonIcon = (props) => {

  const { variant, color, btnText,startIcon } = props;

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    <Stack spacing={2} direction="row">
      <LoadingButton loading={isLoading} variant={variant} color={color} loadingPosition="start" startIcon={startIcon} onClick={handleClick}>
        {btnText}
      </LoadingButton>
    </Stack>
  );
};

export default MuiStartLoadingButtonIcon;

// Use This Example
// import SaveIcon from "@mui/icons-material/Save";
// <MuiStartLoadingButtonIcon btnText={"Fetch Data"} variant={"outlined"} color={"primary"} startIcon={<SaveIcon/>}/>

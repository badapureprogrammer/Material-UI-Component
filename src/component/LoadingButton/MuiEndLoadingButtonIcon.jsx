import React, { useState } from "react";
import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const MuiEndLoadingButtonIcon = (props) => {

  const { variant, color, btnText,endIcon } = props;

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    <Stack spacing={2} direction="row">
      <LoadingButton loading={isLoading} variant={variant} color={color} loadingPosition="end" endIcon={endIcon} onClick={handleClick}>
        {btnText}
      </LoadingButton>
    </Stack>
  );
};

export default MuiEndLoadingButtonIcon;

// Use This Example
// import SaveIcon from "@mui/icons-material/Save";
// <MuiEndLoadingButtonIcon btnText={"Fetch Data"} variant={"outlined"} color={"primary"} endIcon={<SaveIcon/>}/>

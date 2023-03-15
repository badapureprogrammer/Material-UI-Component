import React, { useState } from "react";
import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const MuiLoadingButton = (props) => {

  const { variant, color, btnText } = props;

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    <Stack spacing={2} direction="row">
      <LoadingButton loading={isLoading} variant={variant} color={color} loadingIndicator="loading..." onClick={handleClick}>
        {btnText}
      </LoadingButton>
    </Stack>
  );
};

export default MuiLoadingButton;

// Use This Example
// <MuiLoadingButton variant={"outlined"} color={"error"} btnText={"Submit Data"}/>

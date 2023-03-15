import React, { useState, useEffect } from "react";
import treeImage from "../../images/tree_image.jpg";
import { Skeleton, Stack, Box, Avatar, Typography } from "@mui/material";

const MuiSkeleton = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => setTimeout(() => setIsLoading(false), 3000), []);

  return (
    <Box sx={{ width: "250px" }}>
      {isLoading ? (<Skeleton variant="rectangular" width={256} height={144} animation="wave"/>) : (<img src={treeImage} alt="tree image" width={256} height={144} />)}
      <Stack direction="row" spacing={1} sx={{ width: "100%", marginTop: "10px" }}>
        {isLoading ? (<Skeleton variant="circular" width={40} height={40} />) : (<Avatar>AB</Avatar>)}
        <Stack width="80%">
          {isLoading ? (
            <>
              <Typography variant="body1">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
              <Typography variant="body2">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="body1">After Loadind Text Here</Typography>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default MuiSkeleton;
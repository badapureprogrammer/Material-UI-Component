import React from "react";
import { Stack, ImageList, ImageListItem } from "@mui/material";

const MuiImageList = (props) => {
  
  const { boxWidth, imageList, cols, loadingVariant } = props;

  return (
    <Stack>
      <ImageList sx={{ width: boxWidth, margin: "auto" }} cols={cols}>
        {imageList.map(({ img, title }, index) => {
          return (
            <ImageListItem key={index}>
              <img src={img} alt={title} loading={loadingVariant} />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Stack>
  );
};

export default MuiImageList;

// Use This Example
// const imageList = [
//   { img: TreeImage, title: "Tree Image1" },
//   { img: TreeImage, title: "Tree Image2" },
//   { img: TreeImage, title: "Tree Image3" },
// ];
// <MuiImageList imageList={imageList} cols={3} boxWidth={"80%"} loadingVariant={"lazy"} />
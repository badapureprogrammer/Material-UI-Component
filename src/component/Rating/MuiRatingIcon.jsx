import React, { useState } from "react";
import { Stack, Rating } from "@mui/material";

const MuiRatingIcon = (props) => {

  const { size, icon, emptyIcon } = props;

  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={2}>
      <Rating value={value} size={size} precision={0.5} onChange={handleChange} icon={icon} emptyIcon={emptyIcon} />
    </Stack>
  );
};

export default MuiRatingIcon;

//  Use This Example
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// <MuiRatingIcon size={"small"} icon={<BookmarkIcon fontSize="inherit" color="error" />} emptyIcon={<BookmarkBorderIcon fontSize="inherit" />}/>


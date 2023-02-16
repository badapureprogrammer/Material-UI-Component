import React, { useState } from "react";
import { Box, Checkbox } from "@mui/material";

const MuiCheckboxIcon = (props) => {
  const { size, color, borderIcon, checkIcon, isDisable, className } = props;

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    const value = event.target.checked;
    setIsChecked(value);
  };

  return (
    <Box>
      <Checkbox size={size} color={color} checked={isChecked} icon={borderIcon} checkedIcon={checkIcon} onChange={handleChange} disabled={isDisable} className={className} />
    </Box>
  );
};

export default MuiCheckboxIcon;

//  Use This Example
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// <MuiCheckboxIcon size={"small"} color={"error"} isDisable={false} borderIcon={<BookmarkBorderIcon />} checkIcon={<BookmarkIcon />} />

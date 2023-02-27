import React from "react";
import { Stack, Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const MuiBadge = (props) => {

  const { content, color, iconColor } = props;

  return (
    <Stack spacing={5}>
      <Badge badgeContent={content} variant={content === 1 ? "dot" : null} color={color}>
        <MailIcon color={iconColor} />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;

// Use This Example
// <MuiBadge content={1} color={"warning"} />


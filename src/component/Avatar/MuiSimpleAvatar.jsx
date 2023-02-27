import React from "react";
import { SimpleAvatar } from "./AvatarList";
import { Stack, Avatar, AvatarGroup } from "@mui/material";

export const MuiSimpleAvatar = (props) => {

  const { direction, variant,spacing } = props;

  const avatar = SimpleAvatar.map(({ background, title }, index) => {
    return (
      <Avatar variant={variant} key={index} sx={{ bgcolor: background }}>
        {title}
      </Avatar>
    );
  });

  return (
    <Stack spacing={3} >
      <Stack direction={direction} spacing={spacing}>
        {avatar}
      </Stack>
    </Stack>
  );

};
// MuiSimpleAvatar


export const MuiSimpleGroupAvatar = (props) => {

  const { direction, variant } = props;

  const avatar = SimpleAvatar.map(({ background, title }, index) => {
    return (
      <Avatar variant={variant} key={index} sx={{ bgcolor: background }}>
        {title}
      </Avatar>
    );
  });

  return (
    <Stack spacing={4}>
      <Stack direction={direction}>
        <AvatarGroup max={2}>{avatar}</AvatarGroup>
      </Stack>
    </Stack>
  );
};
// MuiSimpleGroupAvatar

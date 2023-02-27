import React from "react";
import { Stack, Avatar } from "@mui/material";
import { MuiImageAvatarList } from "./AvatarList";

const MuiImageAvatar = (props) => {

  const { direction, variant, spacing } = props;

  const avatarImageList = MuiImageAvatarList.map(({ img, title }) => {
    return <Avatar variant={variant} src={img} alt={title} />;
  });

  return (
    <Stack spacing={4}>
      <Stack direction={direction} spacing={spacing}>
        {avatarImageList}
      </Stack>
    </Stack>
  );
};

export default MuiImageAvatar;
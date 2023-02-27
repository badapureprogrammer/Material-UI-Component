import React from "react";
import { ListMenu } from "./ListMenu";
import {Box,List,Avatar,Divider,ListItem,ListItemText,ListItemIcon,ListItemAvatar,ListItemButton} from "@mui/material";

const MuiList = (props) => {

  const { boxWidth, isDisablePadding, background } = props;

  const listItem = ListMenu.map(({ icon, primaryText, secondaryText }, index) => {
      return (
        <>
          <ListItem disablePadding={isDisablePadding}>
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>{icon}</Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText primary={primaryText} secondary={secondaryText} />
            </ListItemButton>
          </ListItem>
          <Divider />
        </>
      );
    }
  );

  return (
    <Box sx={{ minWidth: boxWidth, bgcolor: background }}>
      <List>{listItem}</List>
    </Box>
  );
};

export default MuiList;

// Use This Example
// <MuiList boxWidth={"250px"} isDisablePadding={true} background={"#efefef"}/>
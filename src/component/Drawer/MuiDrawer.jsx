import React, { useState } from "react";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MuiDrawer = (props) => {

  const {drawerDirection,boxWidth,menuAlign,color,variant,weight,className,children} = props;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawer = (isOpen) => {
    setIsDrawerOpen(isOpen);
  };

  return (
    <>
      <IconButton size="large" edge="start" color="inherit" onClick={() => handleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor={drawerDirection} open={isDrawerOpen} onClose={() =>handleDrawer(false)}>
        <Box p={2} width={boxWidth} textAlign={menuAlign} role="presentation">
          <Typography color={color} variant={variant} fontWeight={weight} className={className}>
            {children}
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;

// Use This Example
// <MuiDrawer drawerDirection={"left"} boxWidth={"300px"} menuAlign={"center"} children={"SIDEBAR"} color={"error"} variant={"body1"}/>
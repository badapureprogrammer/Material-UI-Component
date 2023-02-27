import React, { useState } from "react";
import { MenuList } from "./MenuList";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

const MuiBottomNavigation = () => {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const MenuItem = MenuList.map(({ icon, title }, index) => {
    return <BottomNavigationAction key={index} label={title} icon={icon} />;
  });

  return (
    <BottomNavigation sx={{ width: "100%", position: "absolute", bottom: 0 }}
                      value={value} onChange={handleChange} showLabels={false}>
      {MenuItem}
    </BottomNavigation>
  );
};

export default MuiBottomNavigation;
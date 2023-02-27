import React from "react";
import { iconList } from "./SpeedDialIcon";
import EditIcon from "@mui/icons-material/Edit"
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";

const MuiSpeedDial = () => {

  const handleClick = (value) => {
    console.log(value);
  };

  const iconItem = iconList.map(({ icon, title }, index) => {
    return (
      <SpeedDialAction key={index} icon={icon} onClick={() => handleClick(title)} tooltipTitle={title} />
    );
  });

  return (
    <SpeedDial ariaLabel="Navigation speed dial" icon={<SpeedDialIcon openIcon={<EditIcon/>} />} 
               sx={{ position: "absolute", bottom: "16px", right: "16px" }}>
      {iconItem}
    </SpeedDial>
  );
};

export default MuiSpeedDial;

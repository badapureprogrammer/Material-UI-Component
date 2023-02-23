import React from "react";
import { menuList } from "./menuList";
import { Link } from "react-router-dom";
import MoreIcon from "@mui/icons-material/MoreVert";
import {AppBar,Toolbar,IconButton,Typography,Stack,Button} from "@mui/material";

const MuiNavbar = (props) => {

  const {navbar,size,color,handleClick,logo,logoIcon,logoTextColor,logoTextVariant,logoText,handleMobileMenuOpen,} = props;

  const menuItem = menuList.map(({ title, link }, index) => {
    return (
      <Button color="inherit" key={index}>
        <Link to={link}>{title}</Link>
      </Button>
    );
  });

  return (
    <AppBar position="static">
      <Toolbar className={navbar}>
        <IconButton edge="start" size={size} color={color ? color : "inherit"} onClick={handleClick} className={logo}>
          {logoIcon}
        </IconButton>
        <Typography style={{ color: logoTextColor }} variant={logoTextVariant} sx={{ flexGrow: 1 }}>
          {logoText}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ display: { xs: "none", sm: "flex" } }}>
          {menuItem}
          {/* Here you need to add link style */}
        </Stack>
        <Stack sx={{ display: { sm: "flex", sm: "none" } }}>
          <IconButton size="large" onClick={handleMobileMenuOpen} color="inherit">
            <MoreIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;

// Use This Example
// import { CatchingPokemon } from "@mui/icons-material";
// <MuiNavbar logoIcon={<CatchingPokemon />} logoText={"Pokemon"}></MuiNavbar>
// <Router>
//   <Routes>
//     <Route exact path='/' element={< Home />}></Route>
//   </Routes>
// </Router> 

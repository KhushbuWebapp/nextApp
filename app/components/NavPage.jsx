"use client";
import { AccountCircle } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const NavPage = ({ toggleval, settoggleval }) => {
  return (
    <Box sx={{ flexGrow: 1 }} className=" shadow-sm">
      {/* <AppBar  position="static"> */}
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          className=" md:hidden"
          sx={{ mr: 2 }}
          onClick={() => {
            settoggleval(!toggleval);
            console.log("done");
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          EMPLOYEE
        </Typography>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
      {/* </AppBar> */}
    </Box>
  );
};

export default NavPage;

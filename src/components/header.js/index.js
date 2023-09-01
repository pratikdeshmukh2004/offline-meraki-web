import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import image from "./assest/meraki.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
  drawer: {
    width: 250,
  },
  appBar: {
    backgroundColor: "white", // Set the background color to white
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        sx={{
          background: "background",
          position: "sticky",
        }}
        color="background"
      >
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link to="/">
              <img
                src={image}
                loading="lazy"
                alt="meraki"
                sx={{ marginTop: "10px" }}
              />
            </Link>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "black" }}
            >
              Meraki Python course offline
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;

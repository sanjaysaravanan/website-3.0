import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography
} from "@material-ui/core";
import "./NavBar.module.css";

const useStyles = makeStyles(theme => ({
  mainNav: {
    transition: ".3s",
    borderBottom: "4px solid #E67E22"
  },
  listNav: {
    display: "inline-block",
    marginLeft: 40,
    position: "relative",
    cursor: "pointer",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: 2,
      bottom: 0,
      left: 0,
      backgroundColor: "#E67E22",
      visiblity: "hidden",
      transform: "scaleX(0)",
      transition: "all 0.3s ease-in-out 0s"
    },
    "&:hover::before": {
      visiblity: "visible",
      transform: "scaleX(1)"
    },
    textTransform: "uppercase",
    transition: ".5s"
  }
}));

function NavBar() {
  const classes = useStyles();
  return (
    <AppBar
      position="sticky"
      color="secondary"
      className={classes.mainNav}
      elevation={0}
    >
      <Toolbar>
        <Typography variant="h6" className={classes.listNav}>
          Home
        </Typography>
        <Typography variant="h6" className={classes.listNav}>
          About
        </Typography>
        <Typography variant="h6" className={classes.listNav}>
          Projects
        </Typography>
        <Typography variant="h6" className={classes.listNav}>
          Blog
        </Typography>
        <Typography variant="h6" className={classes.listNav}>
          Contact
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

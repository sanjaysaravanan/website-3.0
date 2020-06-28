import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    width: "100%",
    paddingTop: 100,
    alignContent: "center"
  }
}));

function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="nav-header">ABOUT</div>
      <div className="header-bar"></div>
    </div>
  );
}

export default About;

import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    width: "100%"
  }
}));

function About() {
  const classes = useStyles();
  return <div className={classes.root}></div>;
}

export default About;

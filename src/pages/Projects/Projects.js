import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    width: "100%",
    transition: ".3s",
    backgroundColor: theme.palette.secondary.dark,
    paddingTop: 100
  }
}));

function Projects() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="nav-header">PROJECTS</div>
      <div className="header-bar"></div>
    </div>
  );
}

export default Projects;

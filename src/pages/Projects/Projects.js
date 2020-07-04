import React from "react";
import { makeStyles } from "@material-ui/core";
import Tabs from "./Tabs/Tabs";
const useStyles = makeStyles(theme => ({
  root: {
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
      <Tabs />
    </div>
  );
}

export default Projects;

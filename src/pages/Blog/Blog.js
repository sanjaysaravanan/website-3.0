import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    width: "100%",
    transition: ".3s",
    paddingTop: 100
  }
}));

function Blog() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="nav-header">BLOG</div>
      <div className="header-bar"></div>
    </div>
  );
}

export default Blog;

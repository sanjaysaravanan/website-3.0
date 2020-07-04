import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    transition: ".3s",
    paddingTop: 100,
    paddingBottom: 100
  },
  comingSoon: {
    paddingTop: "20px"
  }
}));

function Blog() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="nav-header">BLOG</div>
      <div className="header-bar"></div>
      <div className={classes.comingSoon}>
        <Typography variant="h4" color="primary">
          COMING SOON
        </Typography>
      </div>
    </div>
  );
}

export default Blog;

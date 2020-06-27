import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    width: "100%",
    transition: ".3s",
    backgroundColor: theme.palette.secondary.light
  }
}));

function Contact() {
  const classes = useStyles();
  return <div className={classes.root}></div>;
}

export default Contact;

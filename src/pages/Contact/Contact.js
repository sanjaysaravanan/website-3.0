import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Form from "./Form";
const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    width: "100%",
    transition: ".3s",
    backgroundColor: theme.palette.secondary.dark,
    paddingTop: 100
  },
  typoDiv: {
    padding: "24px 0px"
  }
}));

function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="nav-header">CONTACT</div>
      <div className="header-bar"></div>
      <div className={classes.typoDiv}>
        <Typography variant="h6">
          Have a question or want to work together?
        </Typography>
      </div>
      <Form />
    </div>
  );
}

export default Contact;

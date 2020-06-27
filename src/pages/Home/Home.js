import React from "react";
import { makeStyles } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Canvas from "./Canvas/Canvas";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  home: {
    color: "#FFF",
    position: "absolute"
  },
  text: {
    fontSize: "3rem",
    lineHeight: "3rem",
    fontWeight: 350,
    marginBottom: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem"
    }
  },
  highlight: {
    color: "#E67E22"
  },
  workView: {
    border: "2px solid #FFF",
    boxSizing: "inherit",
    fontSize: "18pt",
    display: "inline-block",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    transition: ".5s",
    cursor: "pointer",
    "&:hover": {
      border: "2px solid #E67E22",
      backgroundColor: "#E67E22",
      transition: ".5s",
      "& $arrowIcon": {
        transform: "rotate(90deg)",
        transition: ".5s"
      }
    }
  },
  arrowIcon: {
    transition: ".5s"
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.home}>
        <div className={classes.text}>
          Hello, I'm <span className={classes.highlight}>Sanjay Saravanan</span>
          .<br />
          I'm a full-stack developer.
        </div>
        <div className={classes.workView}>
          View my work <ArrowForwardIcon className={classes.arrowIcon} />
        </div>
      </div>
      <Canvas />
    </div>
  );
}

export default Home;

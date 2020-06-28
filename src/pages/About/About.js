import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import ProgressBar from "./ProgressBar/ProgressBar";
import "./About.css";
import MyPic from "../../assets/images/sanjay.jpg";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    paddingTop: 100,
    alignContent: "center"
  },
  textHeaderDiv: {
    fontSize: "20pt",
    fontWeight: "bold",
    marginTop: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: "15pt"
    }
  },
  textDiv: {
    fontSize: "12pt",
    fontWeight: 400,
    margin: "0px 3%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12pt",
      lineHeight: "12pt"
    }
  },
  skillsSection: {
    marginBottom: 20,
    marginRight: "3%",
    marginLeft: "3%",
    marginTop: 20
  },
  imgDiv: {
    height: 230,
    width: 230,
    borderRadius: "50%"
  },
  companyLink: {
    textDecoration: "none",
    color: theme.palette.primary.main
  },
  features: {
    marginTop: 20
  }
}));

function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="nav-header">ABOUT</div>
      <div className="header-bar"></div>
      <div className="iconsRootDiv">
        <Grid container spacing={1}>
          <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
            <div className={classes.features}>
              <div className="iconDivs">
                <span id="responsive" className="material-icons md-60">
                  important_devices
                </span>
              </div>
              <div className={classes.textHeaderDiv}>Frontend</div>
              <div className={classes.textDiv}>Interactive & Responsive</div>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
            <div className={classes.features}>
              <div className="iconDivs">
                <span i="fast" className="material-icons-outlined md-60">
                  speed
                </span>
              </div>
              <div className={classes.textHeaderDiv}>Backend</div>
              <div className={classes.textDiv}>Fast & Efficient</div>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
            <div className={classes.features}>
              <div className="iconDivs">
                <span className="material-icons-outlined md-60">cloud</span>
              </div>
              <div className={classes.textHeaderDiv}>Cloud</div>
              <div className={classes.textDiv}>Scalable & Containerised</div>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
            <div className={classes.features}>
              <div className="iconDivs">
                <span className="material-icons md-60">all_inclusive</span>
              </div>
              <div className={classes.textHeaderDiv}>CI/CD</div>
              <div className={classes.textDiv}>Integration & Deployment</div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <img
              src={MyPic}
              className={classes.imgDiv}
              alt="Sanjay Saravanan"
            />
            <div className={classes.textHeaderDiv}>Who's this guy?</div>
            <div className={classes.textDiv}>
              I'm a Full-Stack Developer for{" "}
              <a
                href="https://www.altimetrik.com"
                className={classes.companyLink}
                target="_blank"
              >
                Altimetrik
              </a>{" "}
              in India, Chennai. I have serious passion for API development, UI,
              DevOps and Cloud services.
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={classes.skillsSection}>
              <ProgressBar name="Python" percentage="80%" />
              <ProgressBar name="Javascript" percentage="65%" />
              <ProgressBar name="React" percentage="65%" />
              <ProgressBar name="Node.js" percentage="50%" />
              <ProgressBar name="Docker" percentage="80%" />
              <ProgressBar name="Jenkins" percentage="60%" />
              <ProgressBar name="MongoDB" percentage="65%" />
              <ProgressBar name="Kubernetes" percentage="50%" />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default About;

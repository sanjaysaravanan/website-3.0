import React, { useRef, useEffect, useState } from "react";
import { makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import "./Navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const getDimensions = ele => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom
  };
};

const scrollTo = ele => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
};

const useStyles = makeStyles(theme => ({
  mainNav: {
    transition: ".3s",
    borderBottom: "4px solid #E67E22"
  },
  listNav: {
    display: "inline-block",
    marginLeft: 40,
    textDecoration: "none",
    color: "#FFF",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: 2,
      bottom: 0,
      left: 0,
      backgroundColor: "#E67E22",
      visiblity: "hidden",
      transform: "scaleX(0)",
      transition: "all 0.3s ease-in-out 0s"
    },
    "&:hover::before": {
      visiblity: "visible",
      transform: "scaleX(1)"
    },
    "&:hover": {
      textDecoration: "none",
      color: "#FFF"
    },
    textTransform: "uppercase",
    transition: ".5s"
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block"
    }
  },
  sectionMobile: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  sliderDiv: {
    backgroundColor: theme.palette.secondary.main,
    height: 0,
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    overflowX: "hidden",
    transition: "0.5s"
  },
  closebtn: {
    textAlign: "right",
    paddingRight: 20,
    paddingTop: 20
  }
}));

function NavBar() {
  const classes = useStyles();
  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { section: "home", ref: homeRef },
    { section: "about", ref: aboutRef },
    { section: "blog", ref: blogRef },
    { section: "contact", ref: contactRef },
    { section: "projects", ref: projectsRef }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;
      // eslint-disable-next-line
      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleSection]);

  function openNav() {
    document.getElementById("mySidenav").style.height = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.height = "0";
  }

  return (
    <>
      <div id="home" ref={homeRef}>
        <Home scrollMethod={scrollTo} homeRef={aboutRef.current} />
      </div>
      <AppBar
        position="sticky"
        color="secondary"
        className={classes.mainNav}
        elevation={0}
      >
        <Toolbar ref={headerRef}>
          <div className={classes.sectionDesktop}>
            <button
              type="button"
              className={`header_link ${
                visibleSection === "home" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(homeRef.current);
              }}
            >
              <Typography variant="h6">HOME</Typography>
            </button>
            <button
              type="button"
              className={`header_link ${
                visibleSection === "about" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(aboutRef.current);
              }}
            >
              <Typography variant="h6">ABOUT</Typography>
            </button>
            <button
              type="button"
              className={`header_link ${
                visibleSection === "projects" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(projectsRef.current);
              }}
            >
              <Typography variant="h6">PROJECTS</Typography>
            </button>
            <button
              type="button"
              className={`header_link ${
                visibleSection === "blog" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(blogRef.current);
              }}
            >
              <Typography variant="h6">BLOG</Typography>
            </button>
            <button
              type="button"
              className={`header_link ${
                visibleSection === "contact" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(contactRef.current);
              }}
            >
              <Typography variant="h6">CONTACT</Typography>
            </button>
          </div>
          <div className={classes.sectionMobile}>
            <MenuIcon onClick={() => openNav()} fontSize="large" />
            <div id="mySidenav" className={classes.sliderDiv}>
              <div className={classes.closebtn}>
                <CloseIcon onClick={() => closeNav()} />
              </div>
              <div
                className={`header_link ${
                  visibleSection === "home" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(homeRef.current);
                  closeNav();
                }}
              >
                <Typography variant="h6">HOME</Typography>
              </div>
              <div
                type="button"
                className={`header_link ${
                  visibleSection === "about" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(aboutRef.current);
                  closeNav();
                }}
              >
                <Typography variant="h6">ABOUT</Typography>
              </div>
              <div
                className={`header_link ${
                  visibleSection === "projects" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(projectsRef.current);
                  closeNav();
                }}
              >
                <Typography variant="h6">PROJECTS</Typography>
              </div>
              <div
                className={`header_link ${
                  visibleSection === "blog" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(blogRef.current);
                  closeNav();
                }}
              >
                <Typography variant="h6">BLOG</Typography>
              </div>
              <div
                className={`header_link ${
                  visibleSection === "contact" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(contactRef.current);
                  closeNav();
                }}
              >
                <Typography variant="h6">CONTACT</Typography>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      <div id="projects" ref={projectsRef}>
        <Projects />
      </div>
      <div id="blog" ref={blogRef}>
        <Blog />
      </div>
      <div id="contact" ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}

export default NavBar;

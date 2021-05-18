import React from "react";
import { Grid, Button, Typography, useMediaQuery } from "@material-ui/core";
import ButtonArrow from "./ui/ButtonArrow";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/styles";

import animationData from "../animations/landinganimation/data";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "40em",
    minWidth: "25em",
    marginTop: "2rem",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimate: {
    ...theme.typography.estimate,
    background: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    "&:hover": {
      background: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    width: 145,
    height: 45,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
    maxWidth: 1600,
  },
  textHeroContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("sm")]: {
      marginRight: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "8em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  heroContainer: {
    marginBottom: "8em",
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container justify="center">
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item>
          {/*----- Hero Block -----*/}
          <Grid
            container
            justify="flex-end"
            alignItems="center"
            className={classes.heroContainer}
          >
            <Grid item sm className={classes.textHeroContainer}>
              <Typography variant="h2" align="center">
                Bringing West Coast Technology
                <br />
                to the Midwest
              </Typography>
              <Grid
                container
                justify="center"
                spacing={4}
                className={classes.buttonContainer}
              >
                <Grid item>
                  <Button className={classes.estimate} variant="contained">
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    className={classes.learnButtonHero}
                    variant="outlined"
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm className={classes.animation}>
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/*----- Custom Software Block -----*/}
          <Grid
            container
            className={classes.serviceContainer}
            justify={matches && "center"}
          >
            <Grid
              item
              style={{
                marginLeft: matches ? undefined : "5em",
                textAlign: matches ? "center" : undefined,
              }}
            >
              <Typography variant="h4">Custom Software Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Save Energy. Save Time. Save Money
              </Typography>
              <Typography variant="subtitle1">
                Complete Digital Solutions, from investigation to{" "}
                <span className={classes.specialText}>celebration</span>
              </Typography>
              <Button variant="outlined" className={classes.learnButton}>
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                ></ButtonArrow>
              </Button>
            </Grid>
            <Grid item>
              <img
                className={classes.icon}
                alt="custom software icon"
                src={customSoftwareIcon}
              ></img>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/*----- Mobile App Block -----*/}
          <Grid
            container
            className={classes.serviceContainer}
            justify={matches ? "center" : "flex-end"}
          >
            <Grid
              item
              style={{
                textAlign: matches ? "center" : undefined,
              }}
            >
              <Typography variant="h4">IOS/Android Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Extend Functionality. Extend Access. INcrease Engagement.
              </Typography>
              <Typography variant="subtitle1">
                Integrate your web experience or create a standalone app
                {matches ? null : <br />}with either mobile platform.
              </Typography>
              <Button variant="outlined" className={classes.learnButton}>
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                ></ButtonArrow>
              </Button>
            </Grid>
            <Grid
              item
              style={{
                marginRight: matches ? undefined : "5em",
              }}
            >
              <img
                className={classes.icon}
                alt="mobile phone icon"
                src={mobileAppIcon}
              ></img>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/*----- Websites Block -----*/}
          <Grid
            container
            className={classes.serviceContainer}
            justify={matches ? "center" : undefined}
          >
            <Grid
              item
              style={{
                textAlign: matches ? "center" : undefined,
                marginLeft: matches ? undefined : "5em",
              }}
            >
              <Typography variant="h4">Website Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Reach More. Discover More. Sell More.
              </Typography>
              <Typography variant="subtitle1">
                Optimized for Search Engine, built for speed
              </Typography>
              <Button variant="outlined" className={classes.learnButton}>
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                ></ButtonArrow>
              </Button>
            </Grid>
            <Grid item>
              <img
                className={classes.icon}
                alt="mobile phone icon"
                src={websiteIcon}
              ></img>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

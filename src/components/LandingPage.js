import React from "react";
import {
  Grid,
  Button,
  Typography,
  useMediaQuery,
  Card,
  CardContent,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ButtonArrow from "./ui/ButtonArrow";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/styles";

import CallToAction from "./ui/CallToAction";

import animationData from "../animations/landinganimation/data";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";

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
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    maxWidth: 700,
    maxHeight: 155,
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));

export default function LandingPage({ setValue, setSelectedIdx }) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
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
                  <Button
                    component={Link}
                    to="/estimate"
                    className={classes.estimate}
                    variant="contained"
                    onClick={() => setValue(5)}
                  >
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    className={classes.learnButtonHero}
                    variant="outlined"
                    component={Link}
                    to="/revolution"
                    onClick={() => setValue(2)}
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
              <Button
                variant="outlined"
                component={Link}
                to="/customsoftware"
                className={classes.learnButton}
                onClick={() => {
                  setValue(1);
                  setSelectedIdx(1);
                }}
              >
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
              <Button
                component={Link}
                to="/mobileapps"
                variant="outlined"
                className={classes.learnButton}
                onClick={() => {
                  setValue(1);
                  setSelectedIdx(2);
                }}
              >
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
              <Button
                component={Link}
                to="/websites"
                variant="outlined"
                className={classes.learnButton}
                onClick={() => {
                  setValue(1);
                  setSelectedIdx(3);
                }}
              >
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
        <Grid item>
          {/*-----The Revolution Block-----*/}
          <Grid
            container
            style={{ height: "100em", marginTop: "12em" }}
            alignItems="center"
            justify="center"
          >
            <Card className={classes.revolutionCard}>
              <CardContent>
                <Grid
                  container
                  direction="column"
                  style={{ textAlign: "center" }}
                >
                  <Grid item>
                    <Typography variant="h3" gutterBottom>
                      The Revolution
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      Visionary insights coupled with cutting-edge technology is
                      a recipe for revolution.
                    </Typography>
                    <Button component={Link} to="/revolution">
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow
                        width={15}
                        height={15}
                        component={Link}
                        to="/revolution"
                        fill={theme.palette.common.blue}
                        onClick={() => setValue(2)}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <div className={classes.revolutionBackground} />
          </Grid>
        </Grid>
        <Grid item>
          {/*----- Information Block -----*/}
          <Grid
            container
            direction="row"
            alignItems="center"
            style={{ height: "80em" }}
            className={classes.infoBackground}
          >
            <Grid
              item
              container
              style={{
                maxWidth: 1600,
              }}
              direction={matchesXS ? "column" : "row"}
            >
              <Grid
                item
                sm
                style={{
                  marginLeft: matchesXS ? 0 : "5em",
                  textAlign: matchesXS ? "center" : "left",
                  marginBottom: matchesXS ? "10em" : 0,
                }}
              >
                <Grid container direction="column">
                  <Typography variant="h2" style={{ color: "white" }}>
                    About Us
                  </Typography>
                  <Typography variant="subtitle2">
                    Let's get personal
                  </Typography>
                  <Grid item>
                    <Button
                      component={Link}
                      to="/about"
                      style={{ color: "white", borderColor: "white" }}
                      variant="outlined"
                      className={classes.learnButton}
                      onClick={() => setValue(3)}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow
                        width={10}
                        height={10}
                        fill="white"
                      ></ButtonArrow>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                sm
                style={{
                  marginRight: matchesXS ? 0 : "5em",
                  textAlign: matchesXS ? "center" : "right",
                }}
              >
                <Grid container direction="column">
                  <Typography variant="h2" style={{ color: "white" }}>
                    Contact Us
                  </Typography>
                  <Typography variant="subtitle2">
                    Say hello!{" "}
                    <span role="img" aria-label="waving hand">
                      👋🏻
                    </span>
                  </Typography>
                  <Grid item>
                    <Button
                      component={Link}
                      to="/contact"
                      style={{ color: "white", borderColor: "white" }}
                      variant="outlined"
                      className={classes.learnButton}
                      onClick={() => setValue(4)}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow
                        width={10}
                        height={10}
                        fill="white"
                      ></ButtonArrow>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/*----- Call To Action Block -----*/}
          <CallToAction setValue={setValue} />
        </Grid>
      </Grid>
    </Grid>
  );
}

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, Typography, Button, useMediaQuery } from "@material-ui/core";

import ButtonArrow from "./ui/ButtonArrow";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
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
    marginTop: "5em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
}));

export default function Services({ setValue, setSelectedIdx }) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      <Grid
        item
        style={{
          marginLeft: matches ? 0 : "5em",
          marginTop: matches ? "1em" : "2em",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          align={matches ? "center" : undefined}
        >
          Services
        </Typography>
      </Grid>
      <Grid item>
        {/*----- Mobile App Block -----*/}
        <Grid
          container
          className={classes.serviceContainer}
          justify={matches ? "center" : "flex-end"}
          style={{
            marginTop: matches ? "1em" : "2em",
          }}
        >
          <Grid
            item
            style={{
              textAlign: matches ? "center" : undefined,
              width: matches ? undefined : "35em",
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
              width="250em"
            ></img>
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
              width: matches ? undefined : "35em",
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
        {/*----- Websites Block -----*/}
        <Grid
          container
          className={classes.serviceContainer}
          justify={matches ? "center" : "flex-end"}
          style={{ marginBottom: "5em" }}
        >
          <Grid
            item
            style={{
              textAlign: matches ? "center" : undefined,
              width: matches ? undefined : "35em",
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
          <Grid
            item
            style={{
              marginRight: matches ? undefined : "5em",
            }}
          >
            <img
              className={classes.icon}
              alt="mobile phone icon"
              src={websiteIcon}
              width="250em"
            ></img>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

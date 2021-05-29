import React, { Component, useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Switch,
  FormGroup,
  FormControlLabel,
  Table,
  TableBody,
  TableHead,
  TableContainer,
  TableRow,
  Paper,
  TableCell,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import FilterListIcon from "@material-ui/icons/FilterList";

const useStyles = makeStyles((theme) => ({}));

function createData(
  name,
  data,
  service,
  features,
  complexity,
  platform,
  users,
  total
) {
  return {
    name,
    data,
    service,
    features,
    complexity,
    platform,
    users,
    total,
  };
}

export default function ProjectManager() {
  const classes = useStyles();
  const theme = useTheme();

  const [rows, setRows] = useState([
    createData(
      "Zachary Reece",
      "11/2/19",
      "Website",
      "E-Commerce",
      "N/A",
      "N/A",
      "N/A",
      "$1500",
      true
    ),
    createData(
      "Bill Gates",
      "10/17/19",
      "Custom Software",
      "GPS, Push Notifications, Users/Authentication, File Transfer",
      "Medium",
      "Web Application",
      "0-10",
      "$1600",
      true
    ),
    createData(
      "Steve Jobs",
      "2/13/19",
      "Custom Software",
      "Photo/Video, File Transfer, Users/Authentication",
      "Low",
      "Web Application",
      "10-100",
      "$1250",
      true
    ),
    createData(
      "Stan Smith",
      "2/13/19",
      "Mobile App",
      "Photo/Video, File Transfer, Users/Authentication",
      "Low",
      "iOS, Android",
      "10-100",
      "$1250",
      true
    ),
    createData(
      "Albert Einstein",
      "2/13/19",
      "Mobile App",
      "Photo/Video, File Transfer, Users/Authentication",
      "Low",
      "Android",
      "10-100",
      "$1250",
      true
    ),
  ]);

  const [websiteChecked, setWebsiteChecked] = useState(false);
  const [iOSChecked, setiOSChecked] = useState(false);
  const [androidChecked, setAndroidChecked] = useState(false);
  const [softwareChecked, setSoftwareChecked] = useState(false);

  return (
    <Grid container direction="column" style={{ marginBottom: "10em" }}>
      <Grid item style={{ marginTop: "2em", marginLeft: "5em" }}>
        <Typography variant="h1">Projects</Typography>
      </Grid>
      <Grid item>
        <TextField
          placeholder="Search project details or create a new entry."
          style={{ width: "35em", marginLeft: "5em" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AddIcon color="primary" style={{ fontSize: 30 }} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item style={{ marginLeft: "5em", marginTop: "2em" }}>
        <FormGroup row>
          <FormControlLabel
            style={{ marginRight: "5em" }}
            control={
              <Switch
                checked={websiteChecked}
                color="primary"
                onChange={() => setWebsiteChecked(!websiteChecked)}
              />
            }
            label="Websites"
            labelPlacement="start"
          />
          <FormControlLabel
            style={{ marginRight: "5em" }}
            control={
              <Switch
                checked={iOSChecked}
                color="primary"
                onChange={() => setiOSChecked(!iOSChecked)}
              />
            }
            label="iOS Apps"
            labelPlacement="start"
          />
          <FormControlLabel
            style={{ marginRight: "5em" }}
            control={
              <Switch
                checked={androidChecked}
                color="primary"
                onChange={() => setAndroidChecked(!androidChecked)}
              />
            }
            label="Android Apps"
            labelPlacement="start"
          />
          <FormControlLabel
            style={{ marginRight: "5em" }}
            control={
              <Switch
                checked={softwareChecked}
                color="primary"
                onChange={() => setSoftwareChecked(!softwareChecked)}
              />
            }
            label="Custom Software"
            labelPlacement="start"
          />
        </FormGroup>
      </Grid>
      <Grid item container justify="flex-end" style={{ marginTop: "5em" }}>
        <Grid item style={{ marginRight: 75 }}>
          <FilterListIcon color="secondary" style={{ width: 50, height: 50 }} />
        </Grid>
      </Grid>
      <Grid item>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Services</TableCell>
                <TableCell>Features</TableCell>
                <TableCell>Complexity</TableCell>
                <TableCell>Platforms</TableCell>
                <TableCell>Users</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.service}</TableCell>
                  <TableCell>{row.features}</TableCell>
                  <TableCell>{row.complexity}</TableCell>
                  <TableCell>{row.platform}</TableCell>
                  <TableCell>{row.users}</TableCell>
                  <TableCell>{row.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

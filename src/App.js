import React from "react";
//import logo from "./logo.svg";
//import "./App.css";
import { Button, Typography, Grid, Container } from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core/styles"
import { makeStyles } from "@material-ui/styles";
import theme from "./theme";
import Header from "./Header";
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
    marginBottom: 10
  },
}));




function App() {
  return (
  <ThemeProvider theme = {theme}>
  <CssBaseline />
  <Grid container direction = "column">
    <Grid item>
        <Header />
    </Grid>
  </Grid>
  </ThemeProvider>
   
  );
}

export default App;

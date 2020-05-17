import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  CardMedia,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import theme from "./theme"






const useStyles = makeStyles(theme => ({
  
  card: {
  maxWidth: 300,
  color: theme.palette.secondary.main
  },
  
    media2: {
    height: 300,
    width: 300,
    display: 'flex'
  }
}))



const Game = () => {
    const classes = useStyles();

    return(
    
    
           <Card className ={classes.card}>
              <CardMedia 
                  className={classes.media2}
                  image ={require("./Pictures/xcom.png")}
              />
             
          </Card>
    
    
    
    
    );
}

export default Game;

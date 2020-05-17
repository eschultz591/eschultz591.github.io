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
import theme from "./theme";






const useStyles = makeStyles(theme => ({
  title: {
    margin: theme.spacing(1),
    color: theme.palette.primary.main
  },
  
  menunavbar: {
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.main,
  marginTop:40
  },
  
  card: {
  maxWidth: 500,
  margin: 20,
  color: theme.palette.secondary.main
  },
  
  media: {
    height: 500,
  },
    
  card2: {
  marginTop: 20,
  maxWidth: 1400,
  color: theme.palette.secondary.main
  },
    
  media2: {
    height: 500,
    width: 1400
  },
  
  textbox: {
    color:theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    margin: 20,
    height: 456,
    padding: '10px'
  },
  
  textbox2: {
    color:theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    height: 300,
    width: 320,
    padding: '10px'
  }
  
  
}))




const ProjectsPage = () => {
    const classes = useStyles();
    
    return(
    
    <React.Fragment>
    <Grid container direction = "row">
        <Grid item container>
            <Grid item xs={2}/>
            <Grid item xs={3}>
                <Card className = {classes.card}>
                    <CardMedia
                        className = {classes.media}
                        image = {require("./Pictures/astar1.PNG")}
                    />
                </Card>
            </Grid>
            
             <Grid item xs={5}>            
            
                <AppBar className ={classes.textbox} position = "static">
                    <Typography className ={classes.textbox}>
                   While working on a project in Unity, I made a pathfinding "plugin" for my Unity projects.
                It was a very nice quality of life improvement as it worked for both 2D and 3D games in Unity. I also
                made a version of it to show the algorithm in a 2D scene, and hopefully it will be playing here in a window
                shortly after this website is hosted. I also hope to make an updated version of this visualization app in the future,
                which will show show certain values during the pathfinding as well as other Algorithms, like Theta Star.             </Typography>
                </AppBar>
            </Grid>
            <Grid item xs={2}/>
        </Grid>
    </Grid>
    
    
    <Grid container direction = "row">
            <Grid item container>
             <Grid item xs={1}/>
            <Grid item xs = {10}>
                <Card className = {classes.card2}>
                    <CardMedia
                        className = {classes.media2}
                        image = {require("./Pictures/TDAmeriTrash.png")}
                    />
                </Card>
            </Grid>
            <Grid item xs={1}/>
            </Grid>
    </Grid>
    
    <Grid container direction = "row">
        <Grid item container>
            <Grid item xs= {2}/>
            <Grid item xs={5}>            
            
                <AppBar className ={classes.textbox} position = "static">
                    <Typography className ={classes.textbox}>
                        In a Database class I took we were tasked to create some sort
                        of aplication that could take on the polution problem caused by
                        online returns. Instead taking the obvious path by creating some
                        fake company that would recycle this trash, we decided to tackle this problem 
                        with a more unique solution. We created a brokerage application similar to Robinhood,
                        but we would reward people with free shares based on the ratio of clothes bought and not returned.
                        We used the Alpaca API, react with Material UI, and a SQL database to do this. The SQL database was used
                        to store user information such as positions, and the Alpaca API was used to get "real time" market data and
                        allow the app to actually buy and sell stocks. I really enjoyed working on this project, because the
                        finished product allowed you to actually buy, sell and own equity.            
                   </Typography>
                </AppBar>
            </Grid>
            <Grid item xs = {2}/>
        </Grid>
    </Grid>
    
    
    </React.Fragment>
    );
    
    
    
}


export default ProjectsPage;
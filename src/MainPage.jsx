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

import Aircraft from "./Aircraft";
import Game from "./Game";
import Hiking from "./Hiking";





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
  maxWidth: 400,
  color: theme.palette.secondary.main
  },
  
  media: {
    height: 450,
  },
    
  card2: {
  maxWidth: 800,
  color: theme.palette.secondary.main
  },
    
  media2: {
    height: 300,
    width: 400,
    display: 'flex'
  },
  
  textbox: {
    color:theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
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







function TabPanel(props)
{
    const { children, value, index, ...other} = props;



    return (
    <div
        role = "tabpanel"
        hidden = {value !== index}
        id = {'pictures-tabpanel-${index}'}
        aria-labelledby = {'pictures-tab-${index}'}
        {...other}
    >

        {value === index && (
            <Box p={3}>
                <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );

}



TabPanel.propTypes = {
    chidren: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};




function a11yProps(index){
    return{
        id: 'pictures-tabpanel-${index}',
        "aria-controls":'pictures-tab-${index}',
    };
}








const MainPage = () => {

    const classes = useStyles();
    const[value, setValue] = React.useState(0);


    const handleChange = (even, newValue) => {
        setValue(newValue);
    };
    
    return (
    <React.Fragment>
    <Grid container direction = "row">
    
        <Grid item container >
            <Grid item xs={2} />
            <Grid item xs={3}>
                <Card className ={classes.card}>
                    <CardMedia 
                        className={classes.media}
                        image ={require("./Pictures/RobertEricSchultz3.jpg")}
                    />
                </Card>
            </Grid>
                 
            <Grid item xs={5}>            
            
                <AppBar className ={classes.textbox} position = "static">
                    <Typography className ={classes.textbox}>
                         Hello my name is Robert Eric Schultz and
            I am a computer science student at The University of Texas at Arlington. I have a passion for computer science,
            specifically path planning, graphics, and game development. As someone in the Computer Sceince field,
            I am morally obligated to tell you that I enjoy backpacking, hiking, and things that get me closer to nature.
            Aside from that, I enjoy reading about war history and playing video games, and I almost got a minor in Arabic. 
                    </Typography>
                </AppBar>
            </Grid> 
            
          
        </Grid>
        
        
        <Grid item container direction = {'row'}>
        
            <Grid item xs={5}/>
            
            <Grid item xs={5}> 
                <AppBar className = {classes.menunavbar} position = "static">
                    <Tabs value = {value} onChange = {handleChange} aria-label ="Picture Bar">
                        <Tab label = "Favorite Aircraft" {...a11yProps(0)} />
                        <Tab label = "Favorite Game" {...a11yProps(1)} />
                        <Tab label = "Obligatory Photo" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                
                <TabPanel value = {value} index = {0}>
                    <Grid container direction = {'row'}>
                        <Grid item xs={7}>
                            <Aircraft/>
                        </Grid>
                        <Grid item xs={2}>
                            <Box className = {classes.textbox2} boxShadow={2}>
                                <Typography>
                                    My favorite aircraft is the F4 Phantom II, 
                                    specifically the F-4C and F-4D. A naval interceptor
                                    that was also a capable multi role fighter that is
                                    still in service to this date.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </TabPanel>
                
                <TabPanel value = {value} index = {1}>
                    <Grid container direction = {'row'}>
                        <Grid item xs={6}>
                            <Game/>
                        </Grid>
                        <Grid item xs={2}>
                            <Box className = {classes.textbox2} boxShadow={2}>
                                <Typography>
                                    XCOM: UFO Defense (or UFO: Enemy Unknown) 
                                    is objectivly a perfect game. Although it was 
                                    released in 1994 it is still fun and with a few mods
                                    it can stand the test of time.
                                    
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </TabPanel>
                
                
                
                 <TabPanel value = {value} index = {2}>
                    <Grid container direction = {'row'}>
                        <Grid item xs={6}>
                        <Hiking/>
                        </Grid>
                        <Grid item xs={2}>
                            <Box className = {classes.textbox2} boxShadow={2}>
                                <Typography>
                                This is my obligatory hiking photo. I love hiking and being close to nature and the outdoors.
                                I am unique because I like to live outside two weeks a year.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </TabPanel>
                
                
                
                
                
                
                
            </Grid>
        
        </Grid>
        
        
        
        
    </Grid>
    </React.Fragment>

    );
}

export default MainPage;

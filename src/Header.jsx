import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
} from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import theme from "./theme";

import MainPage from "./MainPage";
import ProjectsPage from "./ProjectsPage";





function TabPanel(props)
{
    const { children, value, index, ...other} = props;



    return (
    <div
        role = "tabpanel"
        hidden = {value !== index}
        id = {'main-tabpanel-${index}'}
        aria-labelledby = {'main-tab-${index}'}
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
        id: 'main-tabpanel-${index}',
        "aria-controls":'main-tab-${index}',
    };
}









const useStyles = makeStyles(theme => ({
  title: {
    margin: theme.spacing(1),
    color: theme.palette.primary.main
  },
  menunavbar: {
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.main

    
  }
}))



const Header = () => {
 const classes = useStyles();
    const[value, setValue] = React.useState(0);


    const handleChange = (even, newValue) => {
        setValue(newValue);
    };
    
    return(
    
        <div className = {classes.title}>
            <AppBar className = {classes.menunavbar} position = "static">
                <Typography className = {classes.title}> Robert Eric Schultz </Typography>
                <Typography className = {classes.title}> eschultz591@gmail.com </Typography>
                <Tabs value = {value} onChange = {handleChange} aria-label ="Main Menu Bar">
                    <Tab label = "About" {...a11yProps(0)} />
                    <Tab label = "Projects" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value = {value} index ={0}>
                    <MainPage/>
            </TabPanel>
            <TabPanel value = {value} index ={1}>
                    <ProjectsPage/>
            </TabPanel>
        
    
    
    
    
    </div>
    );

}

export default Header;

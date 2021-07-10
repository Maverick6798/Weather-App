import {Box, makeStyles} from '@material-ui/core';
import React from 'react'
import bg from '../Images/bg1.jpg'
import Nav from "./Nav"
const useStyles=makeStyles({
    component: {
        height: '100vh',
        display: 'flex'
    },
    rightContainer: {
        background: `url(${bg})`,
        height: '100%',
        width: "100%",
    }
})

const Weather = () =>{
    const classes=useStyles();
    return(
        <Box className={classes.component}>
            <Box className={classes.rightContainer}>
                <Nav />
            </Box>
        </Box>
    )
}

export default Weather;
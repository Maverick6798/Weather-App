import React from 'react'
import {Box,Grid, Paper, makeStyles, Divider,Avatar} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles=makeStyles((theme) => ({
    place: {
        paddingTop: "1.5rem",
        fontWeight: "300px"
    },
    leftComponent: {
        margin: 'auto',
        borderRadius: 20,
        marginTop: 100,
        backgroundColor: 'transparent',
        width: "25%",
        height: 400,
        cursor: "pointer",
        backdropFilter: "blur(10px)"
    },
    temp: {
        borderRadius: 20,
        fontSize: 90,
        marginTop:"-1rem",
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width:"60%",
        height: "70%",
        borderRadius: 20,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4, 4, 4),
        backdropFilter: "blur(10px)",
        color:"#c4c4c4" 
    },
    content:{
        fontWeight: 200,
        color: "#aaa",
        fontStyle:"italic",
        margin:"10px"
    },
    img:{
        align: "center",
        marginTop:"-1rem",
        width: "10rem",
        height: "10rem",
    },
}))
const Current = (data,data1) => {
    const classes=useStyles()
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const url="http://openweathermap.org/img/wn/"+`${data.data.weather[0].icon}`+"@4x.png"
    console.log(data.data)
    return(
        <>
        <Grid container direction="row" justify="center" alignItems="center">
            {data.data?(<Paper className={classes.leftComponent} elevation={6} onClick={handleOpen}>
                <Typography className={classes.place}variant="h3" align="center">{data.data.name},{data.data.sys?.country}</Typography>
                <Grid container justify="center">
                <Avatar className={classes.img}  alt="Remy Sharp" src={url} />
                </Grid>
                <Typography className={classes.temp} variant='h2' align="center">{Math.floor(data.data.main?.temp)}°C</Typography>
                <Typography variant="h5" align="center">{data.data1.current?.weather[0].description}</Typography>
            </Paper>):(null)}
        </Grid>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
            <Grid container direction="row" justify="space-around" alignItems="center" className={classes.paper}>
                <Box>
                    <Typography variant="h4" align="center">Sunrise</Typography>
                    <Typography variant="h5" className={classes.content} align="center">{new Date(data.data.sys?.sunrise * 1000).toLocaleTimeString()}</Typography>
                    
                    <Typography variant="h4" align="center">Temp(min)</Typography>
                    <Typography variant="h5" className={classes.content} align="center">{Math.floor(data.data.main?.temp_min)}°C</Typography>

                    <Typography variant='h4' align="center">Feels Like</Typography>
                    <Typography variant="h5" className={classes.content} align="center">{Math.floor(data.data.main?.feels_like)}°C</Typography>

                    <Typography variant="h4" align="center">Pressure</Typography>
                    <Typography variant="h5" className={classes.content} align="center">{data.data.main?.pressure} hPa</Typography>

                    <Typography variant="h4" align="center">Humidity</Typography>
                    <Typography variant="h5" className={classes.content} align="center" fontFamily="poppins-italic">{data.data.main?.humidity}%</Typography>
                </Box>
                <Divider orientation="vertical" light={true}></Divider>
                <Box>
                    <Typography variant="h4" align="center">Sunset</Typography>
                    <Typography variant="h5" className={classes.content} align="center">{new Date(data.data.sys?.sunset * 1000).toLocaleTimeString()}</Typography>

                    <Typography variant="h4" align="center">Temp(max)</Typography>
                    <Typography variant="h5" className={classes.content} align="center">{Math.floor(data.data.main?.temp_max)}°C</Typography>

                    <Typography variant="h4" align="center">UV</Typography>
                    <Typography variant="h5" className={classes.content} align="center">{data.data1.current?.uvi}</Typography>

                    <Typography variant="h4" align="center">Wind Speed</Typography>
                    <Typography variant="h5" className={classes.content} align="center">{data.data.wind?.speed} m/sec</Typography>

                    <Typography variant="h4" align="center">Wind Direction</Typography>
                    <Typography variant="h5" className={classes.content} align="center">{data.data.wind?.deg}°</Typography>
                </Box>
            </Grid>
        </Fade>
      </Modal>
    </>
    )
}

export default Current
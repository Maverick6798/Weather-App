import React,{useEffect,useState} from 'react'
import {Box, TextField, Button, makeStyles}  from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import getData,{api2} from '../Services/api'
import Current from "./Current"


const useStyles= makeStyles({
    component:{
        display:'flex',
        alignItems:'center',
        justifyContent: "center",
        width: '50%',
        padding: 10,
        paddingTop: 10,
        margin: 'auto',
        boxShadow:5,
        borderRadius: "0 0 20px 20px",
        backdropFilter: "blur(10px)",
    },
    input: {
        color: '#111',
        marginRight: 80,
        fontWeight: 200,
    },
    button: {
        marginTop: 15,
        marginLeft: -40,
    },
    inputp: {
        color: "red",
        fontSize: "1rem",
        fontWeight: 400
    },
})

const Nav = () => {
    const classes = useStyles();

    const[city,setCity]=useState('');
    const[country,setCountry]=useState('');
    const[click,handleClick]=useState(false);

    const handlecitychange = (value) => {
        setCity(value)
    }

    const handlecountrychange = (value) => {
        setCountry(value)
    }
    
    const[data,setweatherdata]=useState();
    const[data1,setweatherdata1]=useState({});
    
    useEffect(()=>{
        city && getData(city,country).then(response =>{
            api2(response.data.coord.lat,response.data.coord.lon).then(response1 =>{
                setweatherdata(response.data)
                setweatherdata1(response1.data)
            })

        })
        handleClick(false)
    },[click])
    return(
        <>
        <Box className={classes.component}>
            <TextField 
                required  
                className={classes.input} 
                inputProps={{className: classes.input}} 
                onChange={(e) => handlecitychange(e.target.value)}
                fontWeight="300px"
                label="City" />
            <TextField 
                className={classes.input} 
                inputProps={{className: classes.input}}
                onChange={(e) => handlecountrychange(e.target.value)} 
                label="Country" />
            <Button 
                className={classes.button} 
                varient="contained"
                onClick={()=>handleClick(true)}>
                <SendIcon />
            </Button>
        </Box>
        {data && <Current data={data} data1={data1} />}
        </>
    )
}
export default Nav;
import axios from 'axios'

const URL = "https://api.openweathermap.org/data/2.5/weather"
const URL2 = "https://api.openweathermap.org/data/2.5/onecall"
const API_KEY = "6c49f8d86ba504d7ec095152f081be5b"
const api = async (city,country) => {
    return(
        await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)    
    )
}

export const api2 = async (lat,lon) => {
    return(
        await axios.get(`${URL2}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)    
    )
}

export default api
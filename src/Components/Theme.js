import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
    typography: {
        fontFamily:"poppins"
    },
    overrides: {
        MuiInputLabel: {
            root: {
                color: "#000",
                fontSize: "1rem",

            }
        },
        MuiInput:{
            root:{
                focused:{
                    color: "red"
                }
            },
            underline:{
                color: "red",
            }
        },
    }
})
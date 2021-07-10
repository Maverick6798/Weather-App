import Weather from "./Components/Weather"
import theme from "./Components/Theme"
import { ThemeProvider } from '@material-ui/styles';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Weather />
    </ThemeProvider>
  );
}

export default App;

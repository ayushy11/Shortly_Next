import "../styles/globals.css";
import { theme } from "../lib/theme";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>      
          <Component {...pageProps} />        
    </ThemeProvider>
  );
}

export default MyApp;

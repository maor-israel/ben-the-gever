import "../styles/globals.css";
import NavigationBar from "./components/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function MyApp({ Component, pageProps }) {
  return (
    <CssBaseline>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <main lang="he" dir="rtl">
          <NavigationBar />
          {/* The Component prop is the active page, so whenever you navigate between routes, Component will change to the new page. */}
          <Component {...pageProps} />
        </main>
      </LocalizationProvider>
    </CssBaseline>
  );
}

export default MyApp;

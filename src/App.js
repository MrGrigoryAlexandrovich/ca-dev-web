import { makeStyles } from "@mui/styles";
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
} from "@mui/material/styles";
import { Theme } from "./components/Theme";
import Routes from "./routes";

const useStyles = makeStyles({
  "@global": {
    body: {
      margin: 0,
      padding: 0,
      background: "linear-gradient(to right, #434343 0%, black 100%)",
    },
  },
});

export default function App() {
  const appliedTheme = createTheme(Theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={appliedTheme}>
        <Routes />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

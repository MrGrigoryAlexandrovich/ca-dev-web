import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
} from "@mui/material/styles";
import { Theme } from "./components/Theme";
import Routes from "./routes";

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

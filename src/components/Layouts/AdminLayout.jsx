import React from "react";
import { Grid, CssBaseline, AppBar, Toolbar, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/styled-engine";
import { Theme } from "../Theme";
import AdminMenu from "../../components/Navigation/AdminMenu";
import AppSettings from "../../components/Navigation/AppSettings";
import logo from "../../assets/logo.png";

const useStyles = makeStyles({
  "@global": {
    body: {
      margin: 0,
      padding: 0,
      background: "linear-gradient(to right, #434343 0%, black 100%)",
    },
  },
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    boxShadow: "none",
  },
  logoHover: {
    cursor: "pointer",
    width: 65,
    padding: 8,
  },
});

export default function AdminLayout({ component }) {
  const classes = useStyles();
  const appliedTheme = createTheme(Theme);
  const Component = component;

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={appliedTheme}>
        <Grid container className={classes.root}>
          <CssBaseline />
          <AppBar
            className={classes.appBar}
            variant="regular"
            position="relative"
          >
            <Toolbar>
              <Box mr={2} sx={{ display: "flex", alignItems: "center" }}>
                <img className={classes.logoHover} src={logo} alt="logo" />
              </Box>

              <div className={classes.title}>
                <AdminMenu />
              </div>
              <AppSettings />
            </Toolbar>
          </AppBar>
          <Component />
        </Grid>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

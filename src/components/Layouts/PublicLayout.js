import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { Grid, CssBaseline } from "@mui/material";
import { StyledEngineProvider } from "@mui/styled-engine";
import { Theme } from "../Theme";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      margin: 0,
      padding: 0,
      background: "linear-gradient(to right, #434343 0%, black 100%)",
      [theme.breakpoints.down("sm")]: {
        background: "#151919 ",
      },
    },
  },
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
}));

export default function PublicLayout({ component }) {
  const classes = useStyles();
  const appliedTheme = createTheme(Theme);
  const Component = component;

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={appliedTheme}>
        <Grid container className={classes.root}>
          <CssBaseline />
          <Component />
        </Grid>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

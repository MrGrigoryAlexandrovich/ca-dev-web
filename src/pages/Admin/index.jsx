import React from "react";
import { Grid, Paper, Typography, Stack, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { navigate } from "@reach/router";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import InsertChartRoundedIcon from "@mui/icons-material/InsertChartRounded";
import LaptopWindowsRoundedIcon from "@mui/icons-material/LaptopWindowsRounded";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.background.default,
  },
  container: {
    margin: "5% auto",
  },
  card: {
    width: 250,
    height: 250,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px 20px 20px",
    cursor: "pointer",
    "&:hover .MuiSvgIcon-root": {
      marginBottom: 20,
    },
  },
  icon: {
    transition: "margin .3s",
    width: 60,
    height: 60,
    marginBottom: 0,
  },
}));

export default function Admin() {
  const classes = useStyles();

  return (
    <Grid container>
      <Stack
        className={classes.container}
        spacing={7}
        alignItems="center"
        justify="center"
        alignSelf="center"
      >
        <Stack direction="row" spacing={7}>
          <Paper
            elevation={1}
            className={classes.card}
            onClick={() => navigate("/users")}
          >
            <Typography variant="h6">Users</Typography>
            <PeopleAltRoundedIcon className={classes.icon} />
            <Typography align="center" variant="caption">
              Interface to manage users
            </Typography>
          </Paper>
          <Paper
            elevation={1}
            className={classes.card}
            onClick={() => navigate("/ratings")}
          >
            <Typography variant="h6">Ratings</Typography>
            <InsertChartRoundedIcon className={classes.icon} />
            <Typography align="center" variant="caption">
              Interface to manage Ratings
            </Typography>
          </Paper>
          <Paper
            elevation={1}
            className={classes.card}
            onClick={() => navigate("/technologies")}
          >
            <Typography variant="h6">Technologies</Typography>
            <LaptopWindowsRoundedIcon className={classes.icon} />
            <Typography align="center" variant="caption">
              Interface to manage Technologies
            </Typography>
          </Paper>
        </Stack>
      </Stack>
    </Grid>
  );
}

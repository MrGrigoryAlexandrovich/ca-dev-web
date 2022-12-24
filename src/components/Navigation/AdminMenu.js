import React, { useMemo } from "react";
import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { navigate, useLocation } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  menuButtonContainer: {
    display: "flex",
    flexDirection: "column",
  },
  menuActive: {
    width: "24px",
    height: "2px",
    flexGrow: 0,
    backgroundColor: "#568fd2",
  },
}));

const ADMIN_MENU = "admin";
const USERS_MENU = "users";
const RATINGS_MENU = "ratings";
const TECHNOLOGIES_MENU = "technologies";

export default function AdminMenu() {
  const classes = useStyles();
  const path = useLocation().pathname;

  const menuActive = useMemo(() => {
    const splittedPath = path.split("/")[1];
    switch (splittedPath) {
      case ADMIN_MENU:
        return ADMIN_MENU;
      case USERS_MENU:
        return USERS_MENU;
      case RATINGS_MENU:
        return RATINGS_MENU;
      case TECHNOLOGIES_MENU:
        return TECHNOLOGIES_MENU;
      default:
        return null;
    }
  }, [path]);

  return (
    <Box display="flex" justifyContent="center">
      <Button
        variant="menuItem"
        onClick={() => navigate("/admin")}
        component="div"
      >
        <div className={classes.menuButtonContainer}>
          Admin
          {menuActive === ADMIN_MENU ? (
            <div className={classes.menuActive} />
          ) : null}
        </div>
      </Button>

      <Button variant="menuItem" onClick={() => navigate("/users")}>
        <div className={classes.menuButtonContainer}>
          Users
          {menuActive === USERS_MENU ? (
            <div className={classes.menuActive} />
          ) : null}
        </div>
      </Button>

      <Button variant="menuItem" onClick={() => navigate("/ratings")}>
        <div className={classes.menuButtonContainer}>
          Ratings
          {menuActive === RATINGS_MENU ? (
            <div className={classes.menuActive} />
          ) : null}
        </div>
      </Button>
      <Button variant="menuItem" onClick={() => navigate("/technologies")}>
        <div className={classes.menuButtonContainer}>
          Technologies
          {menuActive === TECHNOLOGIES_MENU ? (
            <div className={classes.menuActive} />
          ) : null}
        </div>
      </Button>
    </Box>
  );
}

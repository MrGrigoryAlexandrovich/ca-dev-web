import React, { useState, useMemo } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Menu,
  MenuItem,
  IconButton,
  Typography,
  Avatar,
  Button,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { makeStyles } from "@mui/styles";
import { navigate } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  settingsMenu: {
    margin: 0,
    "& ul": {
      width: theme.spacing(31.25),
    },
  },
  imagePreviewContainer: {
    overflow: "hidden",
    width: "24px",
    height: "24px",
    flexGrow: 0,
    borderRadius: "60px",
    border: "solid 1px rgba(0, 0, 0, 0.23)",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
  },
  profilePhoto: {
    width: 40,
    height: 40,
  },
  profileSection: {
    display: "flex",
    width: "100%",
    height: 52,
    alignItems: "center",
  },
  pictureContainer: {
    marginRight: theme.spacing(2),
  },
  activeIcon: {
    color: "#5073E8 !important",
  },
  button: {
    height: 38,
    width: 110,
    fontWeight: 400,
    fontSize: 14,
  },
  invisibleButton: {
    height: 38,
    width: 110,
    marginRight: 1,
  },
}));

export default function AppSettings() {
  const classes = useStyles();
  const [profileMenu, setProfileMenu] = useState(null);
  const [helpMenu, setHelpMenu] = useState(null);
  const [settingsMenu, setSettingsMenu] = useState(null);

  const openProfileMenu = (event) => setProfileMenu(event.currentTarget);
  const closeProfileMenu = () => setProfileMenu(null);
  const openSettingsMenu = (event) => setSettingsMenu(event.currentTarget);
  const closeSettingsMenu = () => setSettingsMenu(null);
  const handleLogOutClick = () => dispatch(logOut());
  const onDone = (url) => navigate(url);
  const handleSubscribe = () => dispatch(getSubscriptionCheckout({ onDone }));
  const openHelpMenu = (event) => setHelpMenu(event.currentTarget);
  const closeHelpMenu = () => setHelpMenu(null);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    // <div>
    //   <IconButton onClick={openProfileMenu}>
    //     <AccountCircleIcon className={!profileMenu ? "" : classes.activeIcon} />
    //   </IconButton>
    //   <Menu
    //     className={classes.settingsMenu}
    //     id="profile-menu"
    //     anchorEl={profileMenu}
    //     keepMounted
    //     open={Boolean(profileMenu)}
    //     onClose={closeProfileMenu}
    //     anchorOrigin={{
    //       vertical: "bottom",
    //       horizontal: "right",
    //     }}
    //     transformOrigin={{
    //       vertical: "top",
    //       horizontal: "right",
    //     }}
    //   >
    //     <MenuItem disabled sx={{ opacity: "1 !important" }}>
    //       <div className={classes.profileSection}>
    //         <div className={classes.pictureContainer}></div>
    //         <div className={classes.userInfoColumn}>
    //           <Typography color="text.headlines" variant="h6" translate="no">
    //             Mysterious
    //           </Typography>
    //           <Typography color="textSecondary" variant="body2"></Typography>
    //         </div>
    //       </div>
    //     </MenuItem>
    //     <MenuItem onClick={handleLogOutClick}>
    //       <Typography variant="body2">Logout</Typography>
    //     </MenuItem>
    //   </Menu>
    // </div>
    <IconButton onClick={logout}>
      <LogoutIcon color="secondary" />
    </IconButton>
  );
}

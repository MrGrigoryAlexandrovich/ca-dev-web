import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";
import { navigate } from "@reach/router";

export default function AppSettings() {
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <IconButton onClick={logout}>
      <LogoutIcon color="secondary" />
    </IconButton>
  );
}

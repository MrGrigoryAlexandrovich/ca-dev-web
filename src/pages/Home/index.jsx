import React from "react";
import Rating from "@mui/material/Rating";
import { axiosInstance } from "../../services";

export default function Home() {
  const userVoted = async (value) => {
    await axiosInstance.post("/ratings", {
      value,
    });
  };

  return (
    <h1 style={{ color: "#fff" }} onClick={userVoted}>
      Home
      <Rating
        name="simple-controlled"
        value={5}
        onClick={(e) => {
          userVoted(e.target.value);
        }}
      />
    </h1>
  );
}

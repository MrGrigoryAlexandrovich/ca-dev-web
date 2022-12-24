import { useState, useEffect } from "react";
import { Stack, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import io from "socket.io-client";
import { axiosInstance } from "../../services";
import ChartView from "./ChartView";
import TableView from "./TableView";
import TableViewIcon from "@mui/icons-material/TableView";
import InsertChartRoundedIcon from "@mui/icons-material/InsertChartRounded";

const useStyles = makeStyles({
  icon: {
    width: 50,
    height: 50,
  },
});

const socket = io.connect("https://ca-dev-api.onrender.com");

export default function Ratings() {
  const classes = useStyles();
  const [chartView, setChartView] = useState(true);
  const [loading, setLoading] = useState(false);
  const [ratings, setRatings] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    getData();
  }, [page]);

  const getData = async () => {
    setLoading(true);
    const { data } = await axiosInstance.get(
      `/ratings?page=${page}&limit=${limit}`
    );
    setRatings(data);
    setTimeout(() => setLoading(false), 1000);
  };

  socket.off("vote").on("vote", () => {
    getData();
  });

  return (
    <Stack width="100%" height="100%">
      <Stack direction="row" justifyContent="center">
        <IconButton onClick={() => setChartView(true)}>
          <InsertChartRoundedIcon
            color={chartView ? "secondary" : "divider"}
            className={classes.icon}
          />
        </IconButton>
        <IconButton onClick={() => setChartView()}>
          <TableViewIcon
            color={!chartView ? "secondary" : "divider"}
            className={classes.icon}
          />
        </IconButton>
      </Stack>
      {chartView ? (
        <ChartView ratings={ratings} loading={loading} />
      ) : (
        <TableView
          ratings={ratings}
          loading={loading}
          page={page}
          setPage={setPage}
          limit={limit}
        />
      )}
    </Stack>
  );
}

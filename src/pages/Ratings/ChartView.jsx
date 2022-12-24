import { Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import StandardVerticalBarChart from "../../components/Charts/StandardVerticalBarChart";
import Area from "../../components/Charts/Area";
import Pie from "../../components/Charts/Pie";
import Loading from "../../components/Loading";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    padding: 36,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function ChartView({ ratings, loading }) {
  const classes = useStyles();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Stack className={classes.root}>
          <Stack height={300} width="100%" direction="row" mb={3}>
            <Stack flex={1}>
              <StandardVerticalBarChart
                title="Total Voting by Rating Categories"
                categories={ratings.categories}
                series={ratings.series}
                colors={["#ff4545", "#FF7F50", "#7BE0D1", "#00E396", "#00AAFF"]}
                distributed
              />
            </Stack>
            <Stack flex={1} pr={4}>
              <Pie
                title="Total Voting in Percentages"
                categories={ratings?.categories}
                series={ratings?.series}
                colors={["#ff4545", "#FF7F50", "#7BE0D1", "#00E396", "#00AAFF"]}
              />
            </Stack>
          </Stack>
          <Stack height={300} width="100%" mt={9} pt={3}>
            <Area
              title="Average Rating in the last 5 Active Months"
              series={ratings?.averages}
              categories={ratings?.dates}
              colors={["#ff4545", "#FF7F50", "#7BE0D1", "#00E396", "#00AAFF"]}
            />
          </Stack>
        </Stack>
      )}
    </>
  );
}

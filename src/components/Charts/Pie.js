import { useMemo } from "react";
import { Stack, Typography } from "@mui/material";
import Chart from "react-apexcharts";

export default function Pie({
  series = [],
  categories,
  colors,
  showLegend = true,
  title = "",
}) {
  const reversedSeries = useMemo(
    () => series?.slice(0, series?.length).reverse(),
    [categories, series]
  );

  const reversedCategories = useMemo(
    () => categories?.slice(0, categories?.length).reverse(),
    [categories, series]
  );

  const options = {
    chart: {
      type: "pie",
    },
    colors: colors.slice(0, categories?.length).reverse(),
    labels: reversedCategories,
    stroke: {
      show: false,
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -10,
          minAngleToShowLabel: 15,
        },
      },
    },
    legend: {
      show: showLegend,
      inverseOrder: true,
      labels: {
        useSeriesColors: true,
      },
      position: "right",
      offsetX: 100,
      markers: {
        offsetX: -5,
        offsetY: 2,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "right",
          },
        },
      },
    ],
  };

  return (
    <Stack width="100%" height="100%">
      <Typography variant="h4" color="white" align="center" pb={2}>
        {title}
      </Typography>
      <Chart
        options={options}
        series={reversedSeries}
        type="pie"
        height="100%"
      />
    </Stack>
  );
}

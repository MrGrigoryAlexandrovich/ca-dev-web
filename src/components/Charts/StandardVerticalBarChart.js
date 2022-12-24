import { useMemo } from "react";
import { Stack, Typography } from "@mui/material";
import Chart from "react-apexcharts";

export default function StandardVerticalBarChart({
  series,
  categories,
  colors,
  distributed = false,
  title = "",
  seriesName = "Value",
  showLegend = false,
}) {
  const total = series?.reduce((memo, item) => memo + item, 0);
  const max = useMemo(() => series && Math.max(...series) * 1.15, [series]);
  const options = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    colors,
    plotOptions: {
      bar: {
        borderRadius: 10,
        distributed,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (value) => value,
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories,
      position: "bottom",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        //  formatter: (value) => ((value / total) * 100).toFixed(2), percent kalkulation
        formatter: (value) => value,
      },
      max,
    },

    legend: {
      show: showLegend,
    },
  };

  const formatedSeries = (series = [
    {
      data: series,
      name: seriesName,
    },
  ]);

  return (
    <Stack width="100%" height="100%">
      <Typography variant="h3" color="white" align="center">
        {title}
      </Typography>
      <Chart
        options={options}
        series={formatedSeries}
        type="bar"
        height="100%"
      />
    </Stack>
  );
}

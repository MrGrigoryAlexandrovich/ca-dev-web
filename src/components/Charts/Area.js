import { Stack, Typography } from "@mui/material";
import Chart from "react-apexcharts";

export default function Area({ categories, series = [], colors, title = "" }) {
  const options = {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    grid: {
      padding: {
        left: 50,
        right: 50,
      },
    },
    yaxis: {
      min: 1,
      max: 5,
      labels: {
        style: {
          colors,
          fontSize: 14,
        },
        formatter: (value) => {
          return value;
        },
      },
    },
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      area: {
        dataLabels: {
          position: "top",
        },
      },
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories,
      labels: {
        style: {
          colors: "#fff",
          fontSize: 13,
        },
      },
    },

    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
    },
  };

  const formatedSeries = [
    {
      name: "Average",
      data: series,
    },
  ];

  return (
    <Stack width="100%" height="100%">
      <Typography variant="h3" color="white" align="center">
        {title}
      </Typography>
      <Chart
        options={options}
        series={formatedSeries}
        type="area"
        height="100%"
        width="100%"
      />
    </Stack>
  );
}

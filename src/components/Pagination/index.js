import React from "react";
import { Stack, Typography, Pagination } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  numbersText: {
    color: (props) => props.textColor || theme.palette.secondary.main,
    fontWeight: 700,
  },
}));

export default function PaginationComponent({
  onChange,
  page = 1,
  limit = 10,
  totalRecords = 0,
  backgroundColor = "secondary",
  textColor,
  style,
}) {
  const classes = useStyles({ textColor });

  return (
    <Stack
      direction="row"
      justifyContent="space-betweeen"
      mt={3}
      mb={1}
      px={4}
      sx={style}
    >
      <Stack flex={2}>
        <Pagination
          count={Math.ceil(Number(totalRecords) / limit)}
          color={backgroundColor}
          onChange={onChange}
          page={page}
        />
      </Stack>
      <Stack flex={1} direction="row" justifyContent="flex-end">
        {totalRecords === 0 ? (
          <Typography color="white" variant="body2">
            Showing{" "}
            <span className={classes.numbersText}>
              {0}- {0}
            </span>{" "}
            out of <span className={classes.numbersText}>{totalRecords}</span>{" "}
            results
          </Typography>
        ) : totalRecords > page * limit ? (
          <Typography color="white" variant="body2">
            Showing{" "}
            <span className={classes.numbersText}>
              {page * limit - limit + 1}- {page * limit}
            </span>{" "}
            out of <span className={classes.numbersText}>{totalRecords}</span>{" "}
            results
          </Typography>
        ) : (
          <Typography color="white" variant="body2">
            Showing{" "}
            <span className={classes.numbersText}>
              {page * limit - limit + 1} - {totalRecords}
            </span>{" "}
            out of <span className={classes.numbersText}>{totalRecords}</span>{" "}
            results
          </Typography>
        )}
      </Stack>
    </Stack>
  );
}

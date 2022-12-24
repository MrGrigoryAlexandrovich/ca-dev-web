import {
  Stack,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";
import moment from "moment";
import { makeStyles } from "@mui/styles";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";

const useStyles = makeStyles({
  table: {
    marginTop: "5%",
    marginBottom: 32,
    minWidth: "100%",
    maxWidth: "100%",
    alignSelf: "center",
    color: "white",
    border: "1px solid #fff",
  },
  tableCell: {
    color: "#fff",
  },
});

export default function TableView({ ratings, loading, page, setPage, limit }) {
  const classes = useStyles();
  const tableHead = ["Value", "Rating", "Date"];
  const colors = ["#ff4545", "#FF7F50", "#7BE0D1", "#00E396", "#00AAFF"];

  const handlePageChanged = (event, newPage) => {
    setPage(newPage);
  };

  console.log(page);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Stack width="100%" height="100%" direction="row" px={4} spacing={10}>
          <Stack flex={1}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  {tableHead.map((row) => (
                    <TableCell
                      key={row}
                      className={classes.tableCell}
                      align="center"
                    >
                      {row}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {ratings?.allVotes?.map((rating) => (
                  <TableRow key={rating._id}>
                    <TableCell className={classes.tableCell} align="center">
                      {rating.value}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="center">
                      <Typography
                        variant="body2"
                        color={colors[rating.value - 1]}
                      >
                        {rating.rating}
                      </Typography>
                    </TableCell>
                    <TableCell className={classes.tableCell} align="center">
                      {moment(rating.created_at).format("DD.MM.YYYY")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Pagination
              page={page}
              totalRecords={ratings.votes}
              limit={limit}
              onChange={handlePageChanged}
            />
          </Stack>
          <Stack flex={1} mt="5%" alignItems="center" justifyContent="center">
            <Typography color="white" variant="h3">
              Average Table
            </Typography>
          </Stack>
        </Stack>
      )}
    </>
  );
}

import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ToggleButton from "@mui/material/ToggleButton";
import { NoSsr, Paper, Theme, Typography } from "@mui/material";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Link from "next/link";
import { useRouter } from "next/router";
import Moment from "moment";
import { Stack } from "@mui/system";
interface AnchorTableProps {
  rows: any;
  headerRows: any;
  tableHeading: any;
  task: any;
}

const ListingTable: React.FunctionComponent<AnchorTableProps> = ({
  rows,
  headerRows,
  tableHeading,
  task,
}) => {
  const router = useRouter();

  const handleGetFullDateWithoutTime = (date: any) => {
    Moment.locale("en");
    return Moment(date).format("DD MMMM YYYY");
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.12)",
        padding: 2,
      }}
    >
      <Stack direction="row" justifyContent={"space-between"}>
        <Typography fontWeight={700}>Tasks List</Typography>
        <ToggleButtonGroup color="primary">
          <ToggleButton sx={{ px: 2 }} value="all">
            All{" "}
          </ToggleButton>
          <ToggleButton sx={{ px: 2 }} value="my task">
            My Task
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Table>
        <NoSsr>
          <TableHead>
            <TableRow>
              {headerRows.map((row: any, index: number) => (
                <TableCell
                  align={row.align}
                  key={index}
                  sx={{
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                  }}
                >
                  {row.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        </NoSsr>
        <TableBody>
          {rows?.map((row: any, index: number) => (
            <TableRow
              key={index}
              sx={{
                borderColor: "1px solid #EFEFEF !important",
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  fontSize: "0.9375rem",
                  textTransform: "capitalize",
                }}
              >
                {task?.[index]?.title}
              </TableCell>
              <TableCell sx={{ fontSize: "0.9375rem" }}></TableCell>
              <TableCell
                sx={{
                  fontSize: "0.9375rem",
                  textTransform: "capitalize",
                }}
              >
                {handleGetFullDateWithoutTime(task?.due_on)}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "0.9375rem",
                  textTransform: "capitalize",
                }}
              >
                {row?.name}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "0.9375rem",
                  textTransform: "capitalize",
                }}
              >
                {row?.name}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "0.9375rem",
                  textTransform: "capitalize",
                }}
              >
                <Typography
                  sx={{
                    color: (theme: Theme) =>
                      row?.anchor?.status === "active"
                        ? theme.palette.success.main
                        : row?.anchor?.status === "inactive"
                        ? theme.palette.error.main
                        : theme.palette.warning.main,
                  }}
                >
                  {handleGetFullDateWithoutTime(task?.[index]?.due_on)}
                </Typography>
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  fontSize: "0.9375rem",
                  textTransform: "capitalize",
                }}
              >
                {task?.[index]?.status}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  fontSize: "0.9375rem",
                  textTransform: "capitalize",
                }}
              >
                high
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListingTable;

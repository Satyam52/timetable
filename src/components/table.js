import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, s1, l1, s2, l2, s3, l3, s4, l4, s5, l5, s6, l6) {
  return { name, s1, l1, s2, l2, s3, l3, s4, l4, s5, l5, s6, l6 };
}
// C : Separation and Purification Processes
// E: Transport Phenomena
const rows = [
  createData(
    "Monday",
    null,
    null,
    "C",
    "https://zoom.us/j/94954208787?pwd=dFUxU3I1YTBKUjRQMlYydTB2R0dhdz09",
    "E",
    "https://zoom.us/j/93556689994?pwd=cldzbFoxT0ZWaWtnZGFzbEZEaGNnZz09",
    null,
    null,
    "F",
    null,
    "P",
    null
  ),
  createData(
    "Tuesday",
    "B",
    "https://zoom.us/j/94322876657?pwd=SXhVQVVUZjUvdlRGcHd0ZEZLMG0ydz09",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "D",
    "https://zoom.us/j/99437989482?pwd=Yld2QTVpZERuMFpFTVg0aWpxYXhjdz09"
  ),

  createData(
    "Wednesday",
    "C",
    "https://zoom.us/j/96685261553?pwd=eUZWL0xBUTRHaFRsaEZST3RXRnVOdz09",
    "E",
    "https://zoom.us/j/92755868280?pwd=YVNqcHlVWG1DYzRpSnJvRUpJeWFzdz09",
    "B",
    "https://zoom.us/j/92258659311?pwd=MS9wM2xxSHUzVk5YL0x6a2oxZE5TUT09",
    null,
    null,
    null,
    null,
    "Seminar",
    null
  ),
  createData(
    "Thrusday",
    "D",
    "https://zoom.us/j/95466722418?pwd=VVVNeXhLOUt0dGs1amwyeDVBSU91QT09",
    null,
    null,
    "C",
    "https://zoom.us/j/98218293840?pwd=bjBGdjV6a0JEMUhPMHVOcDM5VmpKdz09",
    null,
    null,
    "F",
    null,
    "Seminar",
    null
  ),
  createData(
    "Friday",
    "E",
    "https://zoom.us/j/96605923568?pwd=dlJoTktjZkhMaEZzcTVVSndxV1N3UT09",
    "B",
    "https://zoom.us/j/97190250267?pwd=NnFGN25YdzlXbjBobWtuZjhxNjV0dz09",
    "D",
    "https://zoom.us/j/96223816659?pwd=NWxqQTA1cVM2emxxdERJZ3dXZnBoQT09",
    "F",
    null,
    null,
    null,
    "S",
    null
  ),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Day</StyledTableCell>
            <StyledTableCell align="right">9</StyledTableCell>
            <StyledTableCell align="right">10</StyledTableCell>
            <StyledTableCell align="right">11</StyledTableCell>
            <StyledTableCell align="right">12</StyledTableCell>
            <StyledTableCell align="right">2</StyledTableCell>
            <StyledTableCell align="right">3-5</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              {row.s1 ? (
                <StyledTableCell align="right">
                  <a href={row.l1} target="_blank">
                    {row.s1}
                  </a>
                </StyledTableCell>
              ) : (
                <StyledTableCell align="right">-</StyledTableCell>
              )}
              {row.s2 ? (
                <StyledTableCell align="right">
                  <a href={row.l2} target="_blank">
                    {row.s2}
                  </a>
                </StyledTableCell>
              ) : (
                <StyledTableCell align="right">-</StyledTableCell>
              )}
              {row.s3 ? (
                <StyledTableCell align="right">
                  <a href={row.l3} target="_blank">
                    {row.s3}
                  </a>
                </StyledTableCell>
              ) : (
                <StyledTableCell align="right">-</StyledTableCell>
              )}

              {row.s4 ? (
                <StyledTableCell align="right">
                  <a href={row.l4} target="_blank">
                    {row.s4}
                  </a>
                </StyledTableCell>
              ) : (
                <StyledTableCell align="right">-</StyledTableCell>
              )}

              {row.s5 ? (
                <StyledTableCell align="right">
                  <a href={row.l5} target="_blank">
                    {row.s5}
                  </a>
                </StyledTableCell>
              ) : (
                <StyledTableCell align="right">-</StyledTableCell>
              )}
              {row.s6 ? (
                <StyledTableCell align="right">
                  <a href={row.l6} target="_blank">
                    {row.s6}
                  </a>
                </StyledTableCell>
              ) : (
                <StyledTableCell align="right">-</StyledTableCell>
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

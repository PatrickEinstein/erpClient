import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import { faker } from "@faker-js/faker";
import { Grading } from "../recommendations/recommendation";
import { useMediaQuery } from "@mui/material";

import {
  Recommends1,
  Recommends2,
  Recommends3,
  Recommends4,
  Recommends5,
  Recommends6,
  Recommends7,
  Recommends8,
  Recommends9,
  Recommends10,
  Recommends11,
  Recommends12,
  Recommends13,
  Recommends14,
  Recommends15,
  RecommendsAveragePercentage,
} from "../recommendations/recommendation";
import {
  Implications1,
  Implications2,
  Implications3,
  Implications4,
  Implications5,
  Implications6,
  Implications7,
  Implications8,
  Implications9,
  Implications10,
  Implications11,
  Implications12,
  Implications13,
  Implications14,
  Implications15,
  ImplicationsAveragePercentage,
} from "../implications/implications";
import { Box, Stack, Typography } from "@mui/material";

const columns = [
  { id: "name", label: "Category", minWidth: 100 },
  {
    id: "code",
    label: "Score",
    minWidth: 100,
    format: (value) => value.toFixed(2),
  },
  {
    id: "population",
    label: "Implication",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Recommendation",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  // {
  //   id: "density",
  //   label: "Suggestion",
  //   minWidth: 100,
  //   align: "right",
  //   format: (value) => value.toFixed(2),
  // },
];

function createData(name, code, population, size, density) {
  // const density = population / size;
  return { name, code, population, size, density };
}

export const Breakdown = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(18);
  const isNonMobileScreen = useMediaQuery("(min-width:1000px)");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const isresult = useSelector((state) => state.result);
  const cat1 = isresult.cat1;
  const cat2 = isresult.cat2;
  const cat3 = isresult.cat3;
  const cat4 = isresult.cat4;
  const cat5 = isresult.cat5;
  const cat6 = isresult.cat6;
  const cat7 = isresult.cat7;
  const cat8 = isresult.cat8;
  const cat9 = isresult.cat9;
  const cat10 = isresult.cat10;
  const cat11 = isresult.cat11;
  const cat12 = isresult.cat12;
  const cat13 = isresult.cat13;
  const cat14 = isresult.cat14;
  const cat15 = isresult.cat15;
  const istotalAveragePercentage = isresult.totalAveragePercentage;
  const userInfo = isresult.user;

  const rows = [
    createData("Positioning", cat1, <Implications1 />, <Recommends1 />),
    createData("Promoters", cat2, <Implications2 />, <Recommends2 />),
    createData("Products", cat3, <Implications3 />, <Recommends3 />),
    createData("Pricing", cat4, <Implications4 />, <Recommends4 />),
    createData("Predisposition", cat5, <Implications5 />, <Recommends5 />),
    createData("Purpose", cat6, <Implications6 />, <Recommends6 />),
    createData("Payment", cat7, <Implications7 />, <Recommends7 />),
    createData("Production", cat8, <Implications8 />, <Recommends8 />),
    createData("Proficiency", cat9, <Implications9 />, <Recommends9 />),
    createData("People", cat10, <Implications10 />, <Recommends10 />),
    createData("Paperwork", cat11, <Implications11 />, <Recommends11 />),
    createData("Potentials", cat12, <Implications12 />, <Recommends12 />),
    createData("Promotion", cat13, <Implications13 />, <Recommends13 />),
    createData("Purchasers", cat14, <Implications14 />, <Recommends14 />),
    createData("partnership", cat15, <Implications15 />, <Recommends15 />),
    ,
    createData(
      "Total Score",
      <Typography sx={{ fontWeight: "bold" }}>
        {" "}
        {istotalAveragePercentage.toFixed(2) + "%"}{" "}
      </Typography>,
      <ImplicationsAveragePercentage />,
      <RecommendsAveragePercentage />
    ),
    createData("Grade", "...", <Grading />),
  ];

  return (
    <Stack
      sx={
        isNonMobileScreen
          ? {
              margin: 10,
              position: "relative",
            }
          : {
              margin: 0,
              position: "relative",
            }
      }
    >
      <Box
        height={15}
        sx={{
          padding: 3,
          height: "auto",
          width: "auto",
        }}
      >
        <Typography
          align="center"
          variant="h4"
          sx={{
            fontSize: "25px",
            fontWeight: "bold",
            mb: "auto",
            height: "auto",
          }}
        >
          {" "}
          Export Readiness Test for {userInfo.companyName}
        </Typography>
      </Box>
      <Paper sx={{ width: "auto" }}>
        <TableContainer sx={{ maxHeight: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={1}>
                  {/* <Box
                    sx={{
                      width: 100,
                      height: 100,
                      position: "absolute",
                      top:"2%",
                      left:"2%"
                    }}
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/explogo.jpeg"}
                      style={{
                        width: 150,
                        height: 150,
                        backgroundColor: "white",
                      }}
                    />
                  </Box> */}
                </TableCell>
                <TableCell align="left" colSpan={2}>
                  {/* <Typography
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    EXPORT READINESS TEST FOR
                  </Typography> */}
                </TableCell>
                <TableCell align="left" colSpan={3}>
                  <Stack
                    direction="row"
                    sx={{
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={
                        isNonMobileScreen
                          ? {
                              width: 100,
                              height: 100,
                              position: "absolute",
                              left: "-150%",
                              top: -20,
                            }
                          : {
                              width: 100,
                              height: 100,
                              position: "absolute",
                              top: 0,
                              left: "-180%",
                            }
                      }
                    >
                      <img
                        src={process.env.PUBLIC_URL + "/explogo.jpeg"}
                        style={{
                          width: 150,
                          height: 150,
                          backgroundColor: "white",
                        }}
                      />
                    </Box>
                    <Stack>
                      <Typography>
                        <span style={{ fontWeight: "bold" }}> Name :</span>{" "}
                        {userInfo.firstName} {userInfo.lastName}
                      </Typography>
                      <Typography>
                        <span style={{ fontWeight: "bold" }}> Company :</span>{" "}
                        {userInfo.companyName}
                      </Typography>
                      <Typography>
                        <span style={{ fontWeight: "bold" }}> Products : </span>{" "}
                        {userInfo.Products}
                      </Typography>
                      <Typography>
                        <span style={{ fontWeight: "bold" }}>Email :</span>{" "}
                        {userInfo.email}
                      </Typography>
                      <Typography>
                        <span style={{ fontWeight: "bold" }}> Phone : </span>
                        {userInfo.phone}
                      </Typography>
                    </Stack>
                  </Stack>
                </TableCell>
              </TableRow>
              <TableRow>
                {columns.map(({ id, align, label, minWidth }) => (
                  <TableCell
                    key={id}
                    align={align}
                    style={{ top: 57, minWidth: minWidth }}
                  >
                    {label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.name}
                    >
                      {columns.map(({ id, align, label, minWidth, format }) => {
                        const value = row[id];
                        return (
                          <TableCell key={id} align={align}>
                            {format && typeof value === "number"
                              ? format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
      </Paper>
    </Stack>
  );
};

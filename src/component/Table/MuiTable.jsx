import React from "react";
import { tableHeader, tableData } from "./tableData";
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper} from "@mui/material";

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "500px" }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {tableHeader.map(({ head }, index) => {
              return <TableCell key={index}>{head}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => {
            return (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;
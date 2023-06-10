import {
  Box,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

export const MatrixResult = ({ data, columns, title }) => {
  const contentHead =
    columns && columns.length > 0 ? (
      <TableHead>
        <TableRow>
          {columns.map((cell, index) => (
            <TableCell key={index}>{cell}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    ) : (
      <TableHead></TableHead>
    );

  const content =
    data.length === 0 ? (
      <Skeleton variant="rectangular" width="100%" height={60} />
    ) : (
      <Table>
        {contentHead}
        <TableBody>
          {data.map((row, indexRow) => {
            return (
              <TableRow key={`row-${indexRow}`}>
                {row.map((cell, indexCell) => (
                  <TableCell
                    key={`cell-result-matrix-${indexRow}-${indexCell}`}
                  >
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  return <Box>
    <Typography variant="h5">
      {title}
    </Typography>
    {content}
  </Box>;
};

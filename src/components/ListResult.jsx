import {
  Box,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

export const ListResult = ({ data, columns }) => {
  const contentColumns = <TableHead><TableRow>{columns.map (item => <TableCell key={item}>{item}</TableCell>) }</TableRow></TableHead>;
  const content =
    data.length === 0 ? (
      <Skeleton variant="rectangular" width="100%" height={60} />
    ) : (
      <Table>
        {contentColumns}
        <TableBody>
          <TableRow>
            {data.map((cell, indexCell) => (
              <TableCell key={`cell-result-list-${indexCell}`}>{cell}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    );
  return <Box>{content}</Box>;
};

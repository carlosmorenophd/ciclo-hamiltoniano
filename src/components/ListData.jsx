import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React from "react";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";

export const ListData = ({ data, onChangeValue, onAdd, onRemove, columns }) => {
  const contentColumns = columns ? (
    <TableHead>
      <TableRow>
        {columns.map((column, index) => (
          <TableCell key={index}>{column}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  ) : null;

  return (
    <Card>
      <CardContent>
        <Table>
          {contentColumns}
          <TableBody>
            <TableRow>
              {data.map((cell, indexCell) => (
                <TableCell key={`cell-${indexCell}`}>
                  <TextField
                    type="number"
                    value={cell}
                    name={`${indexCell}`}
                    id={`${indexCell}`}
                    onChange={onChangeValue}
                  />
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions>
        <Grid
          container
          component="div"
          direction="row"
          justifyContent="flex-end"
          alignItems="stretch"
        >
          <Grid item component="div">
            <Button variant="contained" color="primary" onClick={onAdd}>
              <AddSharpIcon />
            </Button>
          </Grid>
          <Grid item component="div">
            <Button variant="contained" color="secondary" onClick={onRemove}>
              <RemoveSharpIcon />
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

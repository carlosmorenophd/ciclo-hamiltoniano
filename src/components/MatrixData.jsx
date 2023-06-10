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
import AddSharpIcon from "@mui/icons-material/AddSharp";
import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";
import React from "react";
import PropTypes from "prop-types";

const MatrixData = ({
  columns,
  matrix,
  readOnlyMode,

  onAdd,
  onChangeValue,
  onRemove,
}) => {
  const getReadOnly = ({ row, column }) => {
    switch (readOnlyMode) {
      case "mainDiagonal":
        return row === column;
      default:
        return false;
    }
  };

  const contentColumns = columns ? (
    <TableHead>
      <TableRow>
        {columns.map((column, index) => (
          <TableCell key={index}>{column}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  ): null;

  return (
    <Card>
      <CardContent>
        <Table>
          {contentColumns}
          <TableBody>
            {matrix.map((row, indexRow) => {
              return (
                <TableRow key={`row-${indexRow}`}>
                  {row.map((cell, indexCell) => (
                    <TableCell key={`cell-${indexCell}`}>
                      <TextField
                        type="number"
                        value={cell}
                        name={`textField-${indexRow}-${indexCell}`}
                        id={`textField-${indexRow}-${indexCell}`}
                        onChange={onChangeValue}
                        inputProps={{
                          readOnly: getReadOnly({
                            row: indexRow,
                            column: indexCell,
                          }),
                        }}
                      />
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
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

MatrixData.prototype = {
  readOnlyMode: PropTypes.oneOf(["", "mainDiagonal"]).isRequired,
};

MatrixData.defaultProps = {
  readOnlyMode: "",
};

export default MatrixData;

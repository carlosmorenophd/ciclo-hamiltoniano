import { Alert, Box, Button, Snackbar, Typography } from "@mui/material";
import RouteIcon from "@mui/icons-material/Route";
import MatrixData from "./MatrixData";
import React from "react";
import useBodyUi from "./use-bodyUi";
import { ListResult } from "./ListResult";

const BodyUi = (props) => {
  const {
    alert,
    data,
    result,

    handleAlertClose,
    handleChangeMatrixValue,
    handleMatrixAdd,
    handleMatrixRemove,
    handleResult,
  } = useBodyUi({
    init: {
      data: [
        [0, 1, 0, 1, 0],
        [1, 0, 1, 1, 1],
        [0, 1, 0, 0, 1],
        [1, 1, 0, 0, 1],
        [0, 1, 1, 1, 0],
      ],
      result: [],
    },
  });

  return (
    <Box sx={{ m: 1, p: 2, height: "100%" }} minHeight="100%">
      <Typography variant="body1" component="div">
        Data:
      </Typography>
      <Box>
        <MatrixData
          matrix={data}
          onChangeValue={handleChangeMatrixValue}
          onAdd={handleMatrixAdd}
          onRemove={handleMatrixRemove}
          readOnlyMode="mainDiagonal"
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          endIcon={<RouteIcon />}
          onClick={handleResult}
        >
          Get minimal path
        </Button>
      </Box>
      <Box sx={{ mt: 2 }}>
        <ListResult data={result} title={`Hamiltonian cycle`} columns={["result", "path"]} />
      </Box>
      <Snackbar open={alert} autoHideDuration={6000} onClose={handleAlertClose}>
        <Alert
          onClose={handleAlertClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          The size of matrix must be 2 or more!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default BodyUi;

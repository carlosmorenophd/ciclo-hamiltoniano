import { Box, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const ParameterList = ({ id, label, value, onChange, list }) => {
  const labelId = `${id}-label`;
  const content = list.map((item) => (
    <MenuItem value={item.value} key={item.value}>{item.text}</MenuItem>
  ));
  return (
    <Box>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        fullWidth
        labelId={labelId}
        id={id}
        value={value}
        label={label}
        onChange={onChange}
      >
        {content}
      </Select>
    </Box>
  );
};

export default ParameterList;

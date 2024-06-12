import { Input as MuiInput } from "@mui/material";
import React from "react";

const Input = ({ type = "text", variant, ...rest }) => {
  return <MuiInput type={type} variant={variant} {...rest} />;
};

export default Input;

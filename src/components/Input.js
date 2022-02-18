import React from "react";
import TextField from "@mui/material/TextField";

export default function Input({
  label,
  name,
  type,
  autoFocus,
  required,
  fullWidth,
}) {
  return (
    <TextField
      id={name}
      label={label}
      name={name}
      type={type || "text"}
      autoFocus={autoFocus}
      required={required}
      fullWidth={fullWidth}
      margin="normal"
    />
  );
}

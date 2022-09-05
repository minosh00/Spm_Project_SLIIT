import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function InputField({
  variant = "outlined",
  type = "text",
  label = "label",
  id,
  error = false,
  disabled = false,
  helperText = "",
  size = "small",
  onChange
}) {
  return (
    <div className="w-full">
      <TextField
        onChange={(e) => onChange(e.target.value)}
        error={error}
        disabled={disabled}
        type={type}
        helperText={helperText}
        id={id ? id : variant}
        label={label}
        variant={variant}
        size={size}
        sx={{ width: "100%" }}
      />
    </div>
  );
}

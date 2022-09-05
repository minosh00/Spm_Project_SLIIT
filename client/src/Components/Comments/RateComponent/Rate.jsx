import * as React from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function RateComponent({
  readOnly,
  caption,
  disabled,
  captionDisabled,
  initValue,
  onClick,
  size,
}) {
  const [value, setValue] = React.useState(initValue);

  return (
    <div className="w-fit">
      {!captionDisabled && (
        <Typography component="legend">{caption}</Typography>
      )}
      <Rating
        size={`${size}`}
        readOnly={readOnly}
        name={caption ? caption : ""}
        value={value}
        disabled={disabled}
        onChange={(event, newValue) => {
          setValue(newValue);
          onClick && onClick(value);
        }}
      />
    </div>
  );
}

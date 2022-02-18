import React from "react";
import { Button as Btn } from "@mui/material";

export default function Button({ title, type, fullWidth }) {
  return (
    <Btn
      type="submit"
      fullWidth
      variant="contained"
      sx={{
        mt: 5,
        mb: 2,
        py: 2,
        textTransform: "capitalize",
        fontSize: "1rem",
      }}
    >
      {title}
    </Btn>
  );
}

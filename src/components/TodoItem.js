import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";

const todoStatus = ["Todo", "In-pogress", "Done"];

export default function TodoItem({ id, title, status, changeTodoStatus }) {
  return (
    <Box
      sx={{
        p: 2,
        boxShadow: 2,
        margin: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>{title}</Box>
      <Box>
        <Stack direction="row" spacing={2}>
          {todoStatus.map((item) => (
            <Button
              onClick={() => changeTodoStatus(id, item)}
              sx={{
                backgroundColor: status === item ? "blue" : "white",
                color: status === item ? "white" : "black",
              }}
            >
              {item}
            </Button>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

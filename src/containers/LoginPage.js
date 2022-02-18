import React from "react";
import { Paper, Box, Grid } from "@mui/material";

import Button from "../components/Button";
import Input from "../components/Input";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { login } = useAuth();
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    await login({
      email: data.get("email"),
      password: data.get("password"),
    });
    navigate("/");
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={8}
        sx={{
          backgroundImage:
            "url(https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={4}
        component={Paper}
        elevation={6}
        square
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            my: 8,
            mx: 8,
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <Input
              name="email"
              label="Email address"
              autoFocus
              required
              fullWidth
            />
            <Input
              name="password"
              label="Password"
              type="password"
              autoFocus
              required
              fullWidth
            />
            <Button title="Register" type="submit" fullWidth />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

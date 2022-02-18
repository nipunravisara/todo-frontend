import React from "react";
import { Paper, Box, Link, Grid } from "@mui/material";

import Button from "../components/Button";
import Input from "../components/Input";
import { useAuth } from "../context/authContext";

export default function RegisterPage() {
  const { register } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    await register({
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    });
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
            "url(https://images.unsplash.com/photo-1627850604058-52e40de1b847?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2346&q=80)",
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
            <Input name="name" label="Name" autoFocus required fullWidth />
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
          <Link href="/login" variant="body2">
            Login to account
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
}

import React from "react";
import { Paper, Box, Grid } from "@mui/material";
import Link from "@mui/material/Link";

import Button from "../components/Button";
import Input from "../components/Input";
import { useAuth } from "../context/authContext";

export default function LoginPage() {
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    await login({
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
            <Button title="Login" type="submit" fullWidth />
          </Box>

          <Link href="/register" variant="body2">
            Create account
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
}

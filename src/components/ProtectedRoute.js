import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function ProtectedRoute({ Component }) {
  const { loggedIn } = useAuth();
  const a = localStorage.getItem("accessToken");
  console.log(loggedIn);
  return a ? <Component /> : <Navigate to="/login" />;
}

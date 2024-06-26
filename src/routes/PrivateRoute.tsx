import React from "react";
import { Navigate } from "react-router-dom";

import { useAuthStore } from "../store/authStore";

interface PrivateRouteProps {
  element: React.ReactElement;
}

export function PrivateRoute({ element }: PrivateRouteProps) {
  // const { authenticated } = useAuthStore();
  const authenticated = true;

  return authenticated ? element : <Navigate to="/signIn" />;
}

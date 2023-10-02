import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

export const AppRouter = () => {
  const { isLogged } = useContext(MyContext);
  return (
    <Routes>
      {isLogged ? (
        <Route path="/*" element={<DashboardRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};

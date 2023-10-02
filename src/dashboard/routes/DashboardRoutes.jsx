import React from "react";
import { Home } from "../pages";
import { Routes, Route } from "react-router-dom";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

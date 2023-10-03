import React from "react";
import { Home } from "../pages";
import { Routes, Route } from "react-router-dom";
import { Create } from "../pages/components/Create";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
};

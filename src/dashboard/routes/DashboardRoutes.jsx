import React from "react";
import { Home } from "../pages";
import { Routes, Route } from "react-router-dom";
import { Create } from "../pages/components/Create";
import { Edit } from "../pages/components/Edit";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
};

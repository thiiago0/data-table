import React from "react";
import { useEditData } from "../../hooks/useEditData";
// import { useParams, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";

export const Edit = () => {
  const { data, setData, handleSubmit } = useEditData();

  return (
    <section className="container-create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID</label>
        <input type="number" name="id" id="id" value={data.id} disabled />
        <label htmlFor="name">NAME</label>
        <input
          type="text"
          name="nombre"
          id="name"
          value={data.nombre}
          onChange={(e) => setData({ ...data, nombre: e.target.value })}
          required
        />
        <label htmlFor="lastname">LASTNAME</label>
        <input
          type="text"
          name="apellido"
          id="lastname"
          value={data.apellido}
          onChange={(e) => setData({ ...data, apellido: e.target.value })}
          required
        />
        <label htmlFor="email">EMAIL</label>
        <input
          type="email"
          name="email"
          id="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          required
        />
        <button className="btn-create" type="submit">
          Update
        </button>
      </form>
    </section>
  );
};

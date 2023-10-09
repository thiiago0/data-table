import React from "react";
import { useAddClient } from "../../hooks/useAddClient";
import "./create.css";

export const Create = () => {
  const { inputData, setInputData, handleSubmit } = useAddClient();

  return (
    <section className="container-create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID</label>
        <input
          type="number"
          id="id"
          name="id"
          onChange={(e) => setInputData({ ...inputData, id: e.target.value })}
          required
        />
        <label htmlFor="name">NAME</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) =>
            setInputData({ ...inputData, nombre: e.target.value })
          }
          required
        />
        <label htmlFor="lastname">LASTNAME</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          onChange={(e) =>
            setInputData({ ...inputData, apellido: e.target.value })
          }
          required
        />
        <label htmlFor="email">EMAIL</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) =>
            setInputData({ ...inputData, email: e.target.value })
          }
          required
        />
        <button className="btn-create" type="submit">
          Create
        </button>
      </form>
    </section>
  );
};

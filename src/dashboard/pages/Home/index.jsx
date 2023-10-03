import React from "react";
import { useApiData } from "../hooks/useApiData";
import "./home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const { data, loading } = useApiData("http://localhost:3031/clients");
  if (loading) {
    return <p>Cargando datos...</p>;
  }

  if (!data.length) {
    return <p>No se encontraron datos.</p>;
  }
  return (
    <section className="container-tl">
      <div className="header-table">
        <p className="cl">Clients</p>
      </div>
      <h2 className="list">Clients List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>LASTNAME</th>
            <th>EMAIL</th>
            <th>DATE</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.apellido}</td>
              <td>{item.email}</td>
              <td>{item.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add">
        <button className="btn" onClick={() => navigate("/create")}>
          create client
        </button>
      </div>
    </section>
  );
};

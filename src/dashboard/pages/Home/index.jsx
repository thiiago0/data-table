import React from "react";
import { useApiData } from "../hooks/useApiData";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useDeleteClient } from "../hooks/useDeleteClient";

export const Home = () => {
  const navigate = useNavigate();
  const { handleSubmitDelete } = useDeleteClient(navigate);
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
              <td>
                <button
                  type="button"
                  className="btn-success"
                  onClick={() => navigate(`/edit/${item.id}`)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn-danger"
                  onClick={() => handleSubmitDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add">
        <button className="btn-submit" onClick={() => navigate("/create")}>
          create client
        </button>
      </div>
    </section>
  );
};

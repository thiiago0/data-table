import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export const useEditData = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    id: "",
    nombre: "",
    apellido: "",
    email: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3031/clients/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Confirmation",
      text: "Are you sure you want to edit the client?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, edit",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(`http://localhost:3031/clients/${id}`, data)
          .then((res) => {
            Swal.fire("Success", "Client edited successfully", "success");
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
            Swal.fire(
              "Error",
              "There was an error editing the client",
              "error"
            );
          });
      }
    });
  };

  return { data, setData, handleSubmit };
};

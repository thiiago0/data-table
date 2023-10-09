import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export const useAddClient = () => {
  const [inputData, setInputData] = useState({
    id: "",
    nombre: "",
    apellido: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "are you sure?",
      text: "Do you want to create this client??",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "yes",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post("http://localhost:3031/clients", inputData)
          .then((res) => {
            Swal.fire("Data Created Successfully!");
            setInputData({
              id: "",
              nombre: "",
              apellido: "",
              email: "",
            });
            navigate("/");
          })
          .catch((err) => {
            console.error("Error Creating Client:", err);
            Swal.fire(
              "Error",
              "An error occurred while creating the client",
              "error"
            );
          });
      }
    });
  };

  return { inputData, setInputData, handleSubmit };
};

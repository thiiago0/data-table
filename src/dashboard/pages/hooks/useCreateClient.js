import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useApiData } from "./useApiData";

export const useCreateClient = () => {
  const [clientData, setClientData] = useState({
    id: "",
    name: "",
    lastname: "",
    email: "",
  });
  const navigate = useNavigate();

  const { data: clientsData, loading: clientsLoading } = useApiData(
    "http://localhost:3031/clients"
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClientData({ ...clientData, [name]: value });
  };

  const CreateClient = async () => {
    const confirmResult = await Swal.fire({
      title: "are you sure?",
      text: "Do you want to create this client??",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "yes",
      cancelButtonText: "Cancel",
    });
    setMessage("");

    if (confirmResult.isConfirmed) {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.post(
          "http://localhost:3031/clients",
          clientData
        );
        console.log("created client", response.data);
        setClientData({
          id: "",
          name: "",
          lastname: "",
          email: "",
        });
        navigate("/");
      } catch (error) {
        console.error("Error creating client ");
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    message,
    clientData,
    loading,
    error,
    handleInputChange,
    CreateClient,
    clientsData,
    clientsLoading,
  };
};

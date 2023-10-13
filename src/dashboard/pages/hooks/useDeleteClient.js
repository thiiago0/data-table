// import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const useDeleteClient = (navigate) => {
  const MySwal = withReactContent(Swal);

  const handleSubmitDelete = (id) => {
    console.log("Deleting client with ID:", id);

    MySwal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3031/clients/${id}`)
          .then((res) => {
            MySwal.fire("Deleted!", "The client has been deleted.", "success");
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
            MySwal.fire(
              "Error",
              "An error occurred while deleting the client.",
              "error"
            );
          });
      }
    });
  };

  return {
    handleSubmitDelete,
  };
};

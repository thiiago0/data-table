import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import MyContext from "../../context/MyContext";
import { clients } from "../../user/clients.json";

export const useLogin = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const { setIsLogged, setUserEmail } = useContext(MyContext);

  const handleChangeInput = (setState) => (e) => {
    setState(e.target.value);
  };

  const handleLogin = () => {
    const user = clients.find(
      (user) => user.email === Email && user.password === Password
    );
    if (Email != user.email || Password != user.password) {
      Swal.fire({
        title: "Error",
        text: "Wrong email or password",
        icon: "error",
      });
      setIsLogged(false);
      setMessage("Wrong email or password");
      setEmail("");
      setPassword("");
      setMessage("");
    } else {
      Swal.fire({
        title: "success",
        text: "correct user",
        icon: "success",
        confirmButtonText: "welcome",
      });
      localStorage.setItem("isLogged", true);
      setIsLogged(true);
      localStorage.setItem("userEmail", user.email);
      setUserEmail(user.email);
      setEmail("");
      setPassword("");
      setMessage("");
      navigate("/");
    }
  };

  return {
    message,
    Email,
    Password,
    setMessage,
    setEmail,
    setPassword,
    handleChangeInput,
    handleLogin,
  };
};

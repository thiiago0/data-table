import React from "react";
import "./login.css";
import { useLogin } from "../../hooks/useLogin";
export const Login = () => {
  const {
    message,
    Email,
    Password,
    setMessage,
    setEmail,
    setPassword,
    handleChangeInput,
    handleLogin,
  } = useLogin();

  return (
    <div className="container">
      <div className="brand-logo"></div>
      <div className="brand-title">SIGN IN</div>
      <form onSubmit={handleLogin}>
        <div className="inputs">
          <label>EMAIL</label>
          <input
            type="email"
            placeholder="example@test.com"
            name="email"
            value={Email}
            onChange={handleChangeInput(setEmail)}
            required={Email}
          />
          <label>PASSWORD</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={Password}
            onChange={handleChangeInput(setPassword)}
            required={Password}
          />
          <button className="btn-login" type="submit">
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

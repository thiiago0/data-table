import React, { useState } from "react";
import MyContext from "./MyContext";

export const MyAppContext = ({ children }) => {
  const logInfromStorage = localStorage.getItem("isLogged");
  const userNameFromStorage = localStorage.getItem("userEmail") || "";
  const [isLogged, setIsLogged] = useState(logInfromStorage);
  const [userEmail, setUserEmail] = useState(userNameFromStorage);

  return (
    <MyContext.Provider
      value={{ isLogged, setIsLogged, userEmail, setUserEmail }}
    >
      {children}
    </MyContext.Provider>
  );
};

import { useState } from "react";

export default function useToken() {
  // Function to get the token from local storage
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    return tokenString;
  };

  // Initialize token state with the token from local storage
  const [token, setToken] = useState(getToken());

  // save the token to local storage
  const saveToken = (userToken) => {
    localStorage.setItem("token", userToken);
    setToken(userToken.token);
  };

  // Return an object containing current token state
  return {
    setToken: saveToken, // set and save the token
    token, // Current token
  };
}

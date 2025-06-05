import { useState } from "react";
import { login } from "../../services/authService";
export const loginModel = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (email, password) => {
    console.log(email, password);
    try {
      const user = await login(email, password);
      console.log("Logged in user:", user);
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return {
    handleSubmit,
  };
};

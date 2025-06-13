"use server"
import axios from "axios";
import { cookies } from "next/headers";

export const login = async (email: string, password: string) => {
  const cookie = await cookies();
  const res = await axios
    .post(`http://localhost:4000/auth/login`, {
      email,
      password,
    })
    .then((res) => {
      if(res.data === "Invalid credentials") { 
        throw new Error("Invalid credentials");
      }
      const token = res.data.Authorization;
      cookie.set("token", token);
      return token;
    })
    .catch((err) => {
      if (axios.isAxiosError(err)) {
        console.error("Error details:", {
          message: err.message,
          code: err.code, 
          status: err.response?.status,
          data: err.response?.data,
        });
        throw (
          err.response?.data ||
          new Error(
            err.message || "Login request failed due to a network issue."
          )
        );
      }
    });
    return res;
};

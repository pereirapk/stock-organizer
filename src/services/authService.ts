import axios from "axios";

export const login = async (email: string, password: string) => {
  console.log(email, password);
  const res = await axios
    .post(`http://localhost:4000/auth/login`, {
      email,
      password,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

import axios from "axios";
import { cookies } from "next/headers";

export const dashboardModel = () => {
  async function getWallet() {
    const cookie = await cookies();
    const token = cookie.get("token");
    const auth = {
      headers: {
        Authorization: "Bearer" + token,
      },
    };
    const response = await axios.get(
        "http://localhost:3000/wallet/getAll",
        auth
    );
    return response;
  }
  return {
    getWallet,
  }
};

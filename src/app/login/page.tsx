"use client"
import LoginPageComponent from "../../components/organisms/LoginPage";
import { loginModel } from "./viewModel/loginModel";

 const LoginPage = () => {
  const {
    handleSubmit,
  } = loginModel();

  return <LoginPageComponent handleSubmit={handleSubmit}/>;
}
export default LoginPage;
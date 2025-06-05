import LoginPageComponent from "../../components/organisms/LoginPage";
import { loginModel } from "./viewModel/loginModel";

export const LoginPage = () => {
  const {
    handleSubmit,
  } = loginModel();

  return <LoginPageComponent 
  handleSubmit={handleSubmit}
    />;
}

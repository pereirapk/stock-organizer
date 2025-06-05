"use client"
import { AuthLayout } from '../templates/AuthLayout'
import { LoginForm } from './LoginForm'


const LoginPageComponent = ({
  handleSubmit,
}) => {
  return (
  <AuthLayout >
    <LoginForm  handleSubmit={handleSubmit} />
  </AuthLayout>
)};
export default LoginPageComponent;
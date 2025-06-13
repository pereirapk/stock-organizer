"use client"
import { AuthLayout } from '../templates/AuthLayout'
import { LoginForm } from './LoginForm'
interface LoginPageComponentProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void; // Or Promise<void> if async
}


const LoginPageComponent = ({
  handleSubmit,
}: LoginPageComponentProps) => {
  return (
  <AuthLayout >
    <LoginForm  handleSubmit={handleSubmit} />
  </AuthLayout>
)};
export default LoginPageComponent;
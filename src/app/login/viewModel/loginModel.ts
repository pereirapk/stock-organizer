"use client"
import { login } from "../../../services/authService";
import { useRouter } from "next/navigation";

export const loginModel = () => {
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string; 
    router.push('/')
    try {
      let token = await login(email, password);
      localStorage.setItem('token', token as unknown as string);
      router.push('/dashboard');
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return {
    handleSubmit,
  };
};

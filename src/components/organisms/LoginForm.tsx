"use client"
import { useState } from "react";
import { InputGroup } from "../molecules/InputGroup";

interface LoginFormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void; // Matching the type from LoginPageComponent
}
  

export const LoginForm = ({ handleSubmit }: LoginFormProps) => {
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <InputGroup />
    </form>
  )};


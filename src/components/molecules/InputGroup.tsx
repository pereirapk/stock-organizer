"use client";
import { useState } from "react";
import { Button } from "../atoms/Button";

export const InputGroup = () => {

  return (
    <div className="flex gap-2 justify-center align-center flex-col">
      <label htmlFor="email" className="text-white font-semibold">Email</label>
      <input
        className="w-full sm:w-80 md:w-96 h-12 p-4 text-lg border rounded bg-slate-800 text-white"
        type="email"
        name="email"
      />
      <label htmlFor="password" className="text-white font-semibold">Password</label>
      <input
        className="w-full sm:w-80 md:w-96 h-12 p-4 text-lg border rounded bg-slate-800 text-white mb-6"
        type="password"
        name="password"
      />
      <Button>Login</Button>
    </div>
  );
}

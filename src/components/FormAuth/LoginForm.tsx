import React from "react";
import InputGroup from "../InputGroup/InputGroup";
import InputGroupPassword from "../InputGroup/InputGroupPassword";
import Button from "../Button/Button";
import Link from "next/link";

type LoginFormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  error: string | null;
  loading: boolean;
};

const LoginForm = ({ handleSubmit, error, loading }: LoginFormProps) => {
  return (
    <form onSubmit={handleSubmit} className="w-full md:w-full">
      <h1 className="font-bold md:text-5xl text-4xl text-left mb-3">Login</h1>
      {error && (
        <p className="text-red-500 mt-3 text-sm font-medium px-3 mb-5 bg-red-100 py-4 rounded-md">
          <span className="font-bold">Error!</span> : {error}
        </p>
      )}
      <InputGroup name="username" placeholder="masukan username" />
      <InputGroupPassword name="password" placeholder="masukan password" />

      <p className="text-xs">
        Belum punya akun?{" "}
        <Link href="/sign-up" className="text-blue-400">
          Daftar disini
        </Link>
      </p>

      <Button title="Login" loading={loading} />
    </form>
  );
};

export default LoginForm;

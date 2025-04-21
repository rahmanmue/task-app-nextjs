import Link from "next/link";
import React from "react";
import InputGroup from "../InputGroup/InputGroup";
import InputGroupPassword from "../InputGroup/InputGroupPassword";
import Button from "../Button/Button";

type RegisterFormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  error: string | null;
  loading: boolean;
};

const RegisterForm = ({ handleSubmit, error, loading }: RegisterFormProps) => {
  return (
    <form onSubmit={handleSubmit} className="w-full md:w-full">
      <h1 className="font-bold md:text-5xl text-4xl text-left mb-4">
        Register
      </h1>
      {error && (
        <p className="text-red-500 text-sm font-medium px-3 my-3 bg-red-100 py-4 rounded-md">
          <span className="font-bold">Error!</span> : {error}
        </p>
      )}
      <InputGroup name="fullname" placeholder="masukan fullname" />
      <InputGroup name="username" placeholder="masukan username" />
      <InputGroupPassword name="password" placeholder="masukan password" />

      <div className="mb-4">
        <label
          className="block text-md font-semibold leading-6 text-gray-900 my-2"
          htmlFor="role"
        >
          Apakah Role anda Lead ?
        </label>
        <div className="flex gap-3" id="role">
          <input type="radio" name="role" value={1} required />
          <label className="text-md">Ya</label>
          <input type="radio" name="role" value={0} />
          <label className="text-md">Tidak</label>
        </div>
      </div>

      <p className="text-xs text-right">
        Sudah punya akun?{" "}
        <Link href={"/sign-in"} className="text-blue-400">
          Login disini
        </Link>{" "}
      </p>

      <Button title="Register" loading={loading} />
    </form>
  );
};

export default RegisterForm;

"use client";

import { useState } from "react";
import LoginForm from "@/components/FormAuth/LoginForm";
import { login } from "@/services/auth";
import { useRouter } from "next/navigation";
import { getErrorMsg } from "@/lib/getErrorMsg";
import Image from "next/image";

export default function SignInPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    try {
      setLoading(true);
      await login({ username, password });
      router.push("/group-tasks");
    } catch (err) {
      console.log("disinix", err);
      setError(getErrorMsg(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-blue-500 md:w-full md:h-full hidden md:block">
        <Image
          alt="image-login"
          src={"/assets/images/login.svg"}
          width={500}
          height={300}
          style={{
            width: "100%",
            height: "auto",
            padding: "10%",
          }}
        />
      </div>
      <div className="flex flex-col justify-center items-center px-10 gap-3">
        <LoginForm
          handleSubmit={handleSubmit}
          error={error}
          loading={loading}
        />
      </div>
    </>
  );
}

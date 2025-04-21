"use client";
import { useState } from "react";
import RegisterForm from "@/components/FormAuth/RegisterForm";
import { register } from "@/services/auth";
import { useRouter } from "next/navigation";
import { getErrorMsg } from "@/lib/getErrorMsg";
import Image from "next/image";

export default function SignUpPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const fullname = formData.get("fullname") as string;
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const role = formData.get("role") === "1" ? "LEAD" : "TEAM";

    try {
      setLoading(true);
      await register({ username, fullname, password, role });
      router.push("/sign-in");
    } catch (err) {
      setError(getErrorMsg(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center px-10 my-5 gap-3">
        <RegisterForm
          handleSubmit={handleSubmit}
          error={error}
          loading={loading}
        />
      </div>
      <div className="bg-blue-500 md:w-full md:h-full hidden md:block">
        <Image
          alt="image-register"
          src={"/assets/images/register.svg"}
          width={500}
          height={300}
          style={{
            width: "100%",
            height: "auto",
            padding: "10%",
          }}
        />
      </div>
    </>
  );
}

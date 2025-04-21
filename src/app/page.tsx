// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[100vh] w-full">
      <div className="flex flex-col gap-3 justify-center items-center h-full px-5">
        {/* <Image
          src={"/assets/images/task.svg"}
          alt="task-app"
          width={300}
          height={500}
          style={{
            width: "30%",
            height: "auto",
          }}
        /> */}
        <h1 className="text-6xl font-semibold text-center">TASKS APP</h1>
        <div className="flex gap-3">
          <Link href="/sign-in" className="hover:text-blue-500 hover:underline">
            Login
          </Link>
          /
          <Link
            href="/sign-up  "
            className="hover:text-blue-500 hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

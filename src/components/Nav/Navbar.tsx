import { UserContext } from "@/context/UserContext";
import { logout } from "@/services/auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const Navbar = () => {
  const pathname = usePathname();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    } finally {
      window.location.href = "/sign-in";
    }
  };

  const context = useContext(UserContext);

  if (!context) {
    throw new Error("Navbar harus berada dalam UserProvider");
  }

  const { user } = context;

  return (
    <nav className="flex justify-between items-center shadow-md py-2 px-5">
      <h2 className="text-sm md:text-md font-medium">
        Hi,{user?.fullname}{" "}
        <span className="font-light text-sm">[{user?.role}]</span>
      </h2>
      <div className="flex gap-1">
        {!pathname.includes("group-tasks") ? (
          <Link
            href="/group-tasks"
            className="text-sm md:text-md font-bold cursor-pointer py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Group Task
          </Link>
        ) : (
          ""
        )}
        <button
          onClick={() => handleLogout()}
          className="text-sm md:text-md font-bold cursor-pointer py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-gray-950 text-white"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";
import { createContext, useState, useEffect, ReactNode } from "react";
import { getDetailUser } from "@/services/users";
import { usePathname } from "next/navigation";

export type User = {
  id: string;
  username: string;
  fullname: string;
  role: string;
};

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  const [user, setUser] = useState<User | null>(null);
  const fetchUser = async () => {
    try {
      const res = await getDetailUser();
      setUser(res.data);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (pathname.includes("group-tasks") && user === null) {
      fetchUser();
    }
  }, [pathname]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

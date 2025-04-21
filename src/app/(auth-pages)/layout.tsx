import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth",
  description: "Auth Page",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-full h-screen grid lg:grid-cols-2 grid-cols-1 items-center justify-center">
      {children}
    </div>
  );
}

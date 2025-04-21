import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tasks",
  description: "Tasks Page",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="max-full h-screen">{children}</div>;
}

import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      {children}
      <Outlet />
    </>
  );
}

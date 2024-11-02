import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div style={{ marginTop: "70px" }}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

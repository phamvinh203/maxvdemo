import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";


function MainLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
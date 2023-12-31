import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import SecondaryNavbar from "../SecondaryNavbar";
import Footer from "../Footer";

function Layout() {
  const location = useLocation();
  const showSecondaryNavbar = ['/profile', '/my-bookings', '/create-venue', '/my-listings'].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {showSecondaryNavbar && <SecondaryNavbar />}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

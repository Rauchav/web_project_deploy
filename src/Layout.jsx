import { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollAnimator from "./components/ScrollAnimator";
import OrganizationSchema from "./components/OrganizationSchema";

function Layout() {
  return (
    <StrictMode>
      <OrganizationSchema />
      <ScrollToTop />
      <ScrollAnimator />
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </StrictMode>
  );
}

export default Layout;

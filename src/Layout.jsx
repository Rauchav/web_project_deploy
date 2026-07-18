import { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollAnimator from "./components/ScrollAnimator";

function Layout() {
  return (
    <StrictMode>
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

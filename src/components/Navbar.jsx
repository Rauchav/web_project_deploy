import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logos/whole-logo-white.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const atTop = y < 10;

      if (atTop) {
        setScrolled(false);
        setHidden(false);
      } else if (y > lastY.current) {
        setHidden(true);
        setMenuOpen(false);
      } else {
        setScrolled(true);
        setHidden(false);
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Prevent body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const barClasses = [
    "navbar",
    scrolled ? "navbar--scrolled" : "",
    hidden ? "navbar--hidden" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={barClasses}>
        <div className="navbar__logo">
          <NavLink to="/" onClick={closeMenu}>
            <img src={logo} alt="deploy studio logo" />
          </NavLink>
        </div>

        {/* Desktop nav — always visible on ≥769px via CSS */}
        <nav className="navbar__nav">
          <ul className="navbar__list">
            <li className="navbar__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "navbar__link navbar__link--active"
                    : "navbar__link"
                }
                end
                onClick={closeMenu}
              >
                Deploy?
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "navbar__link navbar__link--active"
                    : "navbar__link"
                }
                onClick={closeMenu}
              >
                Services
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "navbar__link navbar__link--active"
                    : "navbar__link"
                }
                onClick={closeMenu}
              >
                <button
                  className="cta-button-contactus"
                  onClick={() => navigate("/contact")}
                >
                  GET STARTED
                </button>
              </NavLink>
            </li>
          </ul>
        </nav>

        <button
          className={`navbar__hamburger${menuOpen ? " navbar__hamburger--open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="navbar__hamburger-bar" />
          <span className="navbar__hamburger-bar" />
          <span className="navbar__hamburger-bar" />
        </button>
      </header>

      {/*
        Mobile overlay is rendered OUTSIDE the header so it is not clipped
        by the backdrop-filter stacking context on the navbar bar.
      */}
      <div
        className={`navbar__mobile-overlay${menuOpen ? " navbar__mobile-overlay--open" : ""}`}
      >
        <ul className="navbar__mobile-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "navbar__mobile-link navbar__mobile-link--active"
                  : "navbar__mobile-link"
              }
              end
              onClick={closeMenu}
            >
              Deploy?
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "navbar__mobile-link navbar__mobile-link--active"
                  : "navbar__mobile-link"
              }
              onClick={closeMenu}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "navbar__mobile-link navbar__mobile-link--active"
                  : "navbar__mobile-link"
              }
              onClick={closeMenu}
            >
              <button
                className="cta-button-contactus"
                onClick={() => navigate("/contact")}
              >
                GET STARTED
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;

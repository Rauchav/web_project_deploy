import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Seo from "../components/Seo";
import paralaxImg from "../assets/images/elements/paralax-hero.png";
import webdevImg from "../assets/images/elements/web-development.png";
import digmktImg from "../assets/images/elements/digital-marketing.png";
import contcreatImg from "../assets/images/elements/content-creation.png";
import logo3effi from "../assets/images/customers/LOGO 3EFFI.svg";
import logoAndesFilms from "../assets/images/customers/LOGO ANDES FILMS.svg";
import logoBTS from "../assets/images/customers/LOGO BTS.svg";
import logoCaos from "../assets/images/customers/LOGO CAOS.svg";
import logoSuperCars from "../assets/images/customers/LOGO SUPERCARS.svg";
import CountUp from "../components/CountUp";

function ScrollChevron() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("scroll-chevron--bounce");
          void el.offsetWidth; // force reflow so animation restarts
          el.classList.add("scroll-chevron--bounce");
        } else {
          el.classList.remove("scroll-chevron--bounce");
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="scroll-chevron">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="scroll-chevron__icon"
      >
        <polyline points="6 9 12 15 18 9" />
        <polyline points="6 14 12 20 18 14" />
      </svg>
    </div>
  );
}

const customerLogos = [
  { src: logo3effi, alt: "3EFFI" },
  { src: logoAndesFilms, alt: "Andes Films" },
  { src: logoBTS, alt: "BTS" },
  { src: logoCaos, alt: "CAOS" },
  { src: logoSuperCars, alt: "SUPERCARS" },
];

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Seo
        title="Deploy Studio | Websites, Marketing & Content Growth"
        description="Deploy Studio is a web development, digital marketing, and content creation studio for growing businesses in Europe and North America."
        path="/"
      />
      <main className="home">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="home__hero">
          <img
            className="home__paralax"
            src={paralaxImg}
            alt="Deploy Studio — websites, marketing and content growth"
          />
          <div
            className="hero__cta"
            data-animate="scale-up"
            data-animate-delay="150"
          >
            <h1 className="hero__cta-h1">
              Your business deserves a
              <span style={{ color: "#fcb514" }}> stunning website</span>,
              <span style={{ color: "#fcb514" }}> automated marketing</span> and{" "}
              <span style={{ color: "#fcb514" }}> great content</span>
            </h1>
            <p className="hero__cta-sub">
              We'll apply to your business, the same marketing & sales best
              practices the big players use. That same recipe for succes.
            </p>
            <div className="cta-buttons">
              <button
                className="cta-button-services"
                onClick={() => navigate("/services")}
              >
                SERVICES
              </button>
              <button
                className="cta-button-contactus"
                onClick={() => navigate("/contact")}
              >
                GET STARTED
              </button>
            </div>
          </div>
        </section>

        {/* ── Service section 1 — Web Development ──────────────── */}
        <section className="home__section">
          <div className="home__section-cont">
            <div className="home__section-cont-text" data-animate="from-bottom">
              <h2 className="home__section-cont-title">WEB DEVELOPMENT</h2>
              <h3 className="home__section-cont-subtitle">
                CUSTOM WEB DEVELOPMENT THAT AUTOMATES YOUR BUSINESS
              </h3>
              <p className="home__section-cont-text-p">
                Let your business operations run automatically while you focus
                on making it grow. We design and develop customized web tools
                that will automate your business operations and optimize your
                results.
              </p>
              <ScrollChevron />
            </div>
            <img
              className="home__section-cont-img"
              src={webdevImg}
              data-animate="from-bottom"
              data-animate-delay="150"
            />
          </div>
        </section>

        {/* ── Service section 2 — Digital Marketing ────────────── */}
        <section className="home__section">
          <div className="home__section-cont">
            <img
              className="home__section-cont-img"
              src={digmktImg}
              data-animate="from-bottom"
            />
            <div
              className="home__section-cont-text"
              data-animate="from-bottom"
              data-animate-delay="150"
            >
              <h2 className="home__section-cont-title">DIGITAL MARKETING</h2>
              <h3 className="home__section-cont-subtitle">
                DATA-DRIVEN DIGITAL MARKETING THAT CAPTURES, CONVERTS AND
                RETAINS
              </h3>
              <p className="home__section-cont-text-p">
                Apply marketing strategies based on real market data and get a
                clear view of how your business grows. Know your market,
                advertise effectively, filter your potential leads, build a fast
                and easy way for them to buy, love it and repeat.
              </p>
              <ScrollChevron />
            </div>
          </div>
        </section>

        {/* ── Service section 3 — Content Creation ─────────────── */}
        <section className="home__section">
          <div className="home__section-cont">
            <div className="home__section-cont-text" data-animate="from-bottom">
              <h2 className="home__section-cont-title">CONTENT CREATION</h2>
              <h3 className="home__section-cont-subtitle">
                CONTENT CREATION THAT BUILDS A BRAND PEOPLE REMEMBER
              </h3>
              <p className="home__section-cont-text-p">
                Your brand image, how it communicates, and what it says make the
                difference. We create, promote, and position winning brands. We
                develop your image and ensure that your communications and
                content are eye-catching, relevant, and effective.
              </p>
              <ScrollChevron />
            </div>
            <img
              className="home__section-cont-img"
              src={contcreatImg}
              data-animate="from-bottom"
              data-animate-delay="150"
            />
          </div>
        </section>

        {/* ── Customers & stats ────────────────────────────────── */}
        <section className="home__customers">
          <h2 className="home__customers-title" data-animate="from-bottom">
            CUSTOMERS WHO HAVE ALREADY TRUSTED US
          </h2>
          <div className="home__customers-marquee">
            <div className="home__customers-track">
              {[
                ...customerLogos,
                ...customerLogos,
                ...customerLogos,
                ...customerLogos,
              ].map((logo, i) => (
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  className="home__customers-logo"
                />
              ))}
            </div>
          </div>
          <div className="home__customers-stats">
            <h2
              className="home__customers-stats-title"
              data-animate="from-bottom"
            >
              COOL STATS
            </h2>
            <div className="home__customers-stats-grid">
              <div
                className="home__customers-stats-item"
                data-animate="from-bottom"
              >
                <CountUp to={20} prefix="+ " />
                <span className="home__customers-stats-label">
                  HAPPY CUSTOMERS — from film production to e-commerce
                </span>
              </div>
              <div
                className="home__customers-stats-item"
                data-animate="from-bottom"
                data-animate-delay="150"
              >
                <CountUp to={100} prefix="+ " />
                <span className="home__customers-stats-label">
                  PROJECTS across web, marketing, and content
                </span>
              </div>
              <div
                className="home__customers-stats-item"
                data-animate="from-bottom"
                data-animate-delay="300"
              >
                <CountUp to={1000000} prefix="+ " />
                <span className="home__customers-stats-label">
                  LEADS GENERATED across client campaigns
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="home__cta">
          <div className="home__cta-cont" data-animate="scale-up">
            <h2 className="home__cta-cont-h1">
              Ready to deploy your business to success?
            </h2>
            <p className="home__cta-offer">
              Ignite your growth with a FREE custom GTM strategy
            </p>
            <div className="cta-buttons">
              <button
                className="cta-button-services"
                onClick={() => navigate("/services")}
              >
                SERVICES
              </button>
              <button
                className="cta-button-contactus"
                onClick={() => navigate("/contact")}
              >
                GET STARTED
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;

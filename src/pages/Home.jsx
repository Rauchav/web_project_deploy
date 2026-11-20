import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Seo from "../components/Seo";
import paralaxImg from "../assets/images/elements/paralax-hero.png";
import webdevImg from "../assets/images/elements/web-development.png";
import digmktImg from "../assets/images/elements/digital-marketing.png";
import ecommerceImg from "../assets/images/elements/ai-ecommerce.png";
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

const homeServices = [
  {
    title: "AI MARKETING AUTOMATION",
    subtitle: "AI AGENTS THAT CAPTURE, QUALIFY AND NURTURE YOUR LEADS 24/7",
    text: "We connect your ads, website, CRM, email and WhatsApp to AI agents that reply in seconds, qualify every lead, personalize every follow-up and report results in real time. Your pipeline grows without growing your payroll.",
    img: digmktImg,
    alt: "AI marketing automation: AI agents capturing and qualifying leads",
  },
  {
    title: "AI E-COMMERCE AUTOMATION",
    subtitle: "AUTOMATED ONLINE SALES THAT SELL WHILE YOU SLEEP",
    text: "AI shopping assistants, automated product catalogs, abandoned-cart recovery, personalized upsells and order workflows. We automate your Shopify, WooCommerce or custom store end to end to lift conversion rate, average order value and repeat purchases.",
    img: ecommerceImg,
    alt: "AI e-commerce automation for online stores and sales",
  },
  {
    title: "AI CONTENT CREATION",
    subtitle: "IMAGES, VIDEO, AUDIO, ANIMATION AND 3D, PRODUCED AT AI SPEED",
    text: "We build on-brand generative AI pipelines that turn one brief into product photos, ad creatives, short-form videos, voice-overs, animations and 3D models. Art-directed by humans, delivered in hours instead of weeks.",
    img: contcreatImg,
    alt: "AI content creation: AI-generated images, video, audio, animation and 3D models",
  },
  {
    title: "CUSTOM AI WEB PRODUCTS",
    subtitle: "WEBSITES, APPS AND AI TOOLS BUILT AROUND YOUR OPERATIONS",
    text: "High-converting websites, web apps, client portals, dashboards and custom AI tools that plug into your data and automate the workflows slowing your team down. Fast, secure and optimized for Google and AI search from day one.",
    img: webdevImg,
    alt: "Custom AI web products: websites, web apps and AI tools",
  },
];

const processSteps = [
  {
    step: "01",
    label: "AUDIT — we map your operations and find the highest-ROI automations",
  },
  {
    step: "02",
    label: "DESIGN — we blueprint the AI agents, workflows and tools you need",
  },
  {
    step: "03",
    label: "DEPLOY — we build, integrate and launch them into your stack",
  },
  {
    step: "04",
    label: "OPTIMIZE — we monitor, measure and improve results every month",
  },
];

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Seo
        title="AI Automation Agency for Marketing & E-commerce | Deploy Studio"
        description="Deploy Studio is an AI automation agency building AI agents and automated workflows for marketing, e-commerce, content creation and custom web products. Get a free AI consultancy."
        path="/"
      />
      <main className="home">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="home__hero">
          <img
            className="home__paralax"
            src={paralaxImg}
            alt="Deploy Studio — AI automation agency for marketing, e-commerce and content"
          />
          <div
            className="hero__cta"
            data-animate="scale-up"
            data-animate-delay="150"
          >
            <h1 className="hero__cta-h1">
              The AI automation agency that puts your
              <span style={{ color: "#fcb514" }}> marketing</span>,
              <span style={{ color: "#fcb514" }}> sales</span> and{" "}
              <span style={{ color: "#fcb514" }}> content</span> on autopilot
            </h1>
            <p className="hero__cta-sub">
              We design, build and run AI agents and automated workflows that
              capture leads, sell online and produce content 24/7, so your team
              stops doing busywork and starts scaling.
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
                FREE AI CONSULTANCY
              </button>
            </div>
          </div>
        </section>

        {/* ── Service sections — image alternates sides ────────── */}
        {homeServices.map((s, i) => {
          const text = (
            <div
              className="home__section-cont-text"
              data-animate="from-bottom"
              data-animate-delay={i % 2 ? "150" : undefined}
            >
              <h2 className="home__section-cont-title">{s.title}</h2>
              <h3 className="home__section-cont-subtitle">{s.subtitle}</h3>
              <p className="home__section-cont-text-p">{s.text}</p>
              <ScrollChevron />
            </div>
          );
          const img = (
            <img
              className="home__section-cont-img"
              src={s.img}
              alt={s.alt}
              data-animate="from-bottom"
              data-animate-delay={i % 2 ? undefined : "150"}
            />
          );
          return (
            <section key={s.title} className="home__section">
              <div className="home__section-cont">
                {i % 2 ? (
                  <>
                    {img}
                    {text}
                  </>
                ) : (
                  <>
                    {text}
                    {img}
                  </>
                )}
              </div>
            </section>
          );
        })}

        {/* ── Customers, process & stats ───────────────────────── */}
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
          <div className="home__customers-stats home__process">
            <h2
              className="home__customers-stats-title"
              data-animate="from-bottom"
            >
              HOW WE DEPLOY AI IN YOUR BUSINESS
            </h2>
            <ol className="home__customers-stats-grid">
              {processSteps.map((p, i) => (
                <li
                  key={p.step}
                  className="home__customers-stats-item"
                  data-animate="from-bottom"
                  data-animate-delay={i ? String(i * 150) : undefined}
                >
                  <span className="home__customers-stats-number">{p.step}</span>
                  <span className="home__customers-stats-label">{p.label}</span>
                </li>
              ))}
            </ol>
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
                  PROJECTS across marketing, e-commerce, content and web
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
              Ready to deploy AI across your business?
            </h2>
            <p className="home__cta-offer">
              Get a FREE AI automation consultancy and discover exactly where
              automation can save time and grow revenue
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
                FREE AI CONSULTANCY
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;

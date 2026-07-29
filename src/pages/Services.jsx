import { useNavigate } from "react-router-dom";
import Seo from "../components/Seo";
import paralaxImg from "../assets/images/elements/paralax-servicios.png";
import webDevImg from "../assets/images/elements/web-development-button.png";
import digMkt from "../assets/images/elements/digital-marketing-button.png";
import contCreat from "../assets/images/elements/content-creation-button.png";
import ServiceSection from "../components/ServiceSection";
import {
  webDevelopmentTabs,
  digitalMarketingTabs,
  contentCreationTabs,
} from "../data/servicesData";

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

function Services() {
  const navigate = useNavigate();
  return (
    <>
      <Seo
        title="Our Services | Web Dev, Marketing & Content – Deploy Studio"
        description="Explore Deploy Studio's services: web development, digital marketing, and content creation built to convert, retain, and grow your brand."
        path="/services"
      />
      <main className="services">
        <section className="hero__services">
          <img
            className="services__paralax"
            src={paralaxImg}
            alt="deploy studio earth from space picture"
          />
          <div className="hero__services-buttons">
            <div
              className="hero__services-button"
              onClick={() => scrollToSection("web-development")}
              data-animate="from-bottom"
              data-animate-delay="100"
            >
              <h1 className="hero__services-button-title">web development</h1>
              <img className="hero__services-button-img" src={webDevImg} />
            </div>
            <div
              className="hero__services-button"
              onClick={() => scrollToSection("digital-marketing")}
              data-animate="from-bottom"
              data-animate-delay="220"
            >
              <h1 className="hero__services-button-title">digital marketing</h1>
              <img className="hero__services-button-img" src={digMkt} />
            </div>
            <div
              className="hero__services-button"
              onClick={() => scrollToSection("content-creation")}
              data-animate="from-bottom"
              data-animate-delay="340"
            >
              <h1 className="hero__services-button-title">content creation</h1>
              <img className="hero__services-button-img" src={contCreat} />
            </div>
          </div>
        </section>

        <ServiceSection
          id="web-development"
          title="WEB DEVELOPMENT"
          tabs={webDevelopmentTabs}
        />
        <ServiceSection
          id="digital-marketing"
          title="DIGITAL MARKETING"
          tabs={digitalMarketingTabs}
        />
        <ServiceSection
          id="content-creation"
          title="CONTENT CREATION"
          tabs={contentCreationTabs}
        />

        <section className="services__cta">
          <div className="services__cta-cont" data-animate="scale-up">
            <h1 className="services__cta-cont-h1">
              success awaits for those who try.
            </h1>
            <p className="services__cta-offer">
              Ignite your growth, start with a FREE custom GTM strategy
            </p>
            <div className="cta-buttons">
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

export default Services;

import { useNavigate } from "react-router-dom";
import Seo from "../components/Seo";
import FaqSchema from "../components/FaqSchema";
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

const faqs = [
  {
    question: "What does Deploy Studio do?",
    answer:
      "Deploy Studio is a web development, digital marketing, and content creation studio that builds websites, automates marketing, and produces content for growing businesses.",
  },
  {
    question: "Does Deploy Studio work with businesses outside the US?",
    answer:
      "Yes, Deploy Studio works with clients across Europe, North America and Latin America.",
  },
  {
    question: "What's included in a free consultation?",
    answer:
      'A free custom "Go to Market" strategy based on your business, audience, and current marketing channels. No sales call, no commitment, just experts advice that you can later on turn into actions.',
  },
  {
    question: "Can Deploy Studio handle both my website and my marketing?",
    answer:
      "Yes, web development, digital marketing, and content creation run under one team, so your site, ads, and brand content stay consistent.",
  },
];

function Services() {
  const navigate = useNavigate();
  return (
    <>
      <Seo
        title="Web Dev, Marketing & Content Services | Deploy Studio"
        description="UX/UI design, e-commerce, paid ads, SEO & AEO, video, and more — Deploy Studio's web development, digital marketing, and content creation services for growing brands."
        path="/services"
      />
      <FaqSchema faqs={faqs} />
      <main className="services">
        <section className="hero__services">
          <img
            className="services__paralax"
            src={paralaxImg}
            alt="Deploy Studio services — web development, digital marketing and content creation"
          />
          <h1 className="hero__services-title" data-animate="from-bottom">
            Web Development, Digital Marketing, Content Creation Services
          </h1>
          <div className="hero__services-buttons">
            <div
              className="hero__services-button"
              onClick={() => scrollToSection("web-development")}
              data-animate="from-bottom"
              data-animate-delay="100"
            >
              <p className="hero__services-button-title">Web Development</p>
              <img className="hero__services-button-img" src={webDevImg} />
            </div>
            <div
              className="hero__services-button"
              onClick={() => scrollToSection("digital-marketing")}
              data-animate="from-bottom"
              data-animate-delay="220"
            >
              <p className="hero__services-button-title">Digital Marketing</p>
              <img className="hero__services-button-img" src={digMkt} />
            </div>
            <div
              className="hero__services-button"
              onClick={() => scrollToSection("content-creation")}
              data-animate="from-bottom"
              data-animate-delay="340"
            >
              <p className="hero__services-button-title">Content Creation</p>
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

        <section className="services__faq">
          <div className="services__faq-cont">
            <h2 className="services__faq-title" data-animate="from-bottom">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            {faqs.map((faq) => (
              <details key={faq.question} className="services__faq-item">
                <summary className="services__faq-question">
                  {faq.question}
                </summary>
                <p className="services__faq-answer">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="services__cta">
          <div className="services__cta-cont" data-animate="scale-up">
            <h2 className="services__cta-cont-h1">
              success awaits for those who try
            </h2>
            <p className="services__cta-offer">
              Ignite your growth with a FREE personalized business strategy
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

import { useNavigate } from "react-router-dom";
import Seo from "../components/Seo";
import FaqSchema from "../components/FaqSchema";
import paralaxImg from "../assets/images/elements/paralax-servicios.png";
import webDevImg from "../assets/images/elements/web-development-button.png";
import digMkt from "../assets/images/elements/digital-marketing-button.png";
import ecommerceImg from "../assets/images/elements/ai-ecommerce-button.png";
import contCreat from "../assets/images/elements/content-creation-button.png";
import ServiceSection from "../components/ServiceSection";
import {
  aiMarketingTabs,
  aiEcommerceTabs,
  aiContentTabs,
  customWebTabs,
} from "../data/servicesData";

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const services = [
  {
    id: "ai-marketing-automation",
    button: "AI Marketing Automation",
    title: "AI MARKETING AUTOMATION",
    img: digMkt,
    tabs: aiMarketingTabs,
  },
  {
    id: "ai-ecommerce-automation",
    button: "AI E-commerce Automation",
    title: "AI E-COMMERCE AUTOMATION",
    img: ecommerceImg,
    tabs: aiEcommerceTabs,
  },
  {
    id: "ai-content-creation",
    button: "AI Content Creation",
    title: "AI CONTENT CREATION",
    img: contCreat,
    tabs: aiContentTabs,
  },
  {
    id: "custom-web-products",
    button: "Custom AI Web Products",
    title: "CUSTOM AI WEB PRODUCTS",
    img: webDevImg,
    tabs: customWebTabs,
  },
];

const faqs = [
  {
    question: "What does Deploy Studio do?",
    answer:
      "Deploy Studio is an AI automation agency. We design, build and run AI agents and automated workflows for marketing, e-commerce and online sales, content creation (images, video, audio, animation and 3D) and custom web products, helping growing businesses replace repetitive manual work with systems that run 24/7.",
  },
  {
    question: "Which business processes can be automated with AI?",
    answer:
      "Any task that is repetitive, rules-based or data-heavy is a strong candidate: lead capture and qualification, sales follow-ups, email and CRM updates, ad reporting, customer support, product listings, order and inventory management, content production, invoicing and internal reporting. Our free consultancy identifies which of these will deliver the highest return in your business first.",
  },
  {
    question: "What's included in the free AI automation consultancy?",
    answer:
      "You answer a short form about your business, your tools and the tasks that take up your team's time. We analyze your operations and send a personalized AI automation roadmap to your email: the processes worth automating first, the recommended tools and AI agents, the expected impact and a phased implementation plan. No sales call and no commitment.",
  },
  {
    question: "Which AI models and tools do you work with?",
    answer:
      "We are tool-agnostic and choose what fits your stack and budget: large language models such as OpenAI GPT, Anthropic Claude and Google Gemini; automation platforms such as n8n, Make and Zapier; CRMs and marketing platforms such as HubSpot, Klaviyo and Salesforce; e-commerce platforms such as Shopify and WooCommerce; and custom code when off-the-shelf tools fall short.",
  },
  {
    question: "How long does it take to implement an AI automation?",
    answer:
      "Focused automations, such as an AI lead-qualification agent or an abandoned-cart recovery flow, typically go live in 2 to 4 weeks. Custom web products and company-wide digital transformation projects are delivered in phases, so you see measurable results from the first sprint.",
  },
  {
    question: "Will AI automation replace my team?",
    answer:
      "No. We automate the repetitive work so your people can focus on strategy, creativity and customer relationships. Every workflow we build includes human-in-the-loop checkpoints wherever judgment, brand voice or approvals matter.",
  },
  {
    question: "Does Deploy Studio work with businesses outside the US?",
    answer:
      "Yes. Deploy Studio works remotely with clients across Europe, North America and Latin America, and builds automations and AI content in multiple languages.",
  },
];

function Services() {
  const navigate = useNavigate();
  return (
    <>
      <Seo
        title="AI Automation Services for Marketing & E-commerce | Deploy Studio"
        description="AI marketing automation, AI e-commerce automation, AI content creation and custom AI web products. Deploy Studio builds AI agents and workflows that grow revenue and cut manual work."
        path="/services"
      />
      <FaqSchema faqs={faqs} />
      <main className="services">
        <section className="hero__services">
          <img
            className="services__paralax"
            src={paralaxImg}
            alt="Deploy Studio AI automation services for marketing, e-commerce, content creation and web products"
          />
          <h1 className="hero__services-title" data-animate="from-bottom">
            AI Automation Services for Marketing, E-commerce, Content &amp; Web
            Products
          </h1>
          <div className="hero__services-buttons">
            {services.map((s, i) => (
              <div
                key={s.id}
                className="hero__services-button"
                onClick={() => scrollToSection(s.id)}
                data-animate="from-bottom"
                data-animate-delay={100 + i * 120}
              >
                <p className="hero__services-button-title">{s.button}</p>
                <img
                  className="hero__services-button-img"
                  src={s.img}
                  alt=""
                />
              </div>
            ))}
          </div>
        </section>

        {services.map((s) => (
          <ServiceSection key={s.id} id={s.id} title={s.title} tabs={s.tabs} />
        ))}

        <section className="services__faq">
          <div className="services__faq-cont">
            <h2 className="services__faq-title" data-animate="from-bottom">
              FREQUENTLY ASKED QUESTIONS ABOUT AI AUTOMATION
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
              your competitors are already automating
            </h2>
            <p className="services__cta-offer">
              Get a FREE AI automation consultancy and discover where AI can
              save your team hours every week
            </p>
            <div className="cta-buttons">
              <button
                className="cta-button-contactus"
                onClick={() => navigate("/contact")}
              >
                GET MY FREE AI CONSULTANCY
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Services;

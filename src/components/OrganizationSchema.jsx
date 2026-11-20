import { Helmet } from "react-helmet-async";
import logo from "../assets/images/logos/whole-logo-white.png";
import { SITE_URL } from "../config/seo";

const logoUrl = logo.startsWith("http") ? logo : `${SITE_URL}${logo}`;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Deploy Studio",
  url: SITE_URL,
  logo: logoUrl,
  description:
    "Deploy Studio is an AI automation agency that builds AI agents and automated workflows for marketing, e-commerce, content creation and custom web products.",
  knowsAbout: [
    "AI automation",
    "AI agents",
    "Marketing automation",
    "E-commerce automation",
    "Generative AI content creation",
    "Custom web development",
    "Digital transformation",
    "SEO, AEO and GEO",
  ],
  areaServed: ["Europe", "North America"],
  sameAs: [
    "https://www.instagram.com/deploystudiotech/",
    "https://www.youtube.com/@deploystudio-k3h",
    "https://www.linkedin.com/company/deploy-studio-tech/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@deploystudio.net",
    telephone: "+491773348780",
    contactType: "sales",
    areaServed: ["Europe", "North America"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Deploy Studio AI Automation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Marketing Automation",
          description:
            "AI lead and sales agents, AI-powered paid ads, AI email marketing, CRM and pipeline automation, SEO, AEO and GEO.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI E-commerce Automation",
          description:
            "AI-ready store development, AI shopping assistants and support, product catalog automation, cart recovery and retention flows, order and inventory automation.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Content Creation",
          description:
            "AI images and ad creatives, AI video production, AI voice and audio, AI animation and motion graphics, AI 3D modeling.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom AI Web Products",
          description:
            "AI-ready websites, web and mobile apps, custom AI tools and SaaS, dashboards and client portals, AI integrations and workflows.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Free AI Automation Consultancy",
          description:
            "A free personalized AI automation roadmap showing which business processes to automate first.",
        },
      },
    ],
  },
};

function OrganizationSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
}

export default OrganizationSchema;

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
    "Deploy Studio builds websites, automates marketing, and creates content for businesses across Europe and North America.",
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
    name: "Deploy Studio Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development",
          description:
            "UX/UI design, web and app development, e-commerce development, and custom software development.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Marketing",
          description:
            "Paid ads, email marketing, AI automations, SEO & AEO, and CRM management.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Content Creation",
          description:
            "Graphic design, digital illustration, video production, animation, and 3D modeling.",
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

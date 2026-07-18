import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ServiceSection({ id, title, tabs }) {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const active = tabs[activeTab];

  return (
    <section id={id} className="services__section">
      <div className="services__section-header">
        <h2 className="service__section-cont-title" data-animate="from-bottom">{title}</h2>

        <div className="cta-buttons services__section-tabs" data-animate="from-bottom" data-animate-delay="150">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              className={
                activeTab === i
                  ? "cta-button-services cta-button-services--active"
                  : "cta-button-services"
              }
              onClick={() => setActiveTab(i)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* key forces remount on tab change, restarting the CSS animation */}
        <div
          key={activeTab}
          className="services__section-cont services__section-cont--enter"
        >
          <div className="serivce__section-cont-text">
            <h3 className="service__section-cont-subtitle">{active.subtitle}</h3>
            <p className="service__section-cont-text-p">{active.description}</p>
            <button className="cta-button-contactus" onClick={() => navigate("/contact")}>LET'S TALK</button>
          </div>
          <div className="service__section-cont-img-cont">
            <img
              className="service__section-cont-img"
              src={active.image}
              alt={active.subtitle}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ── Data ───────────────────────────────────────────────────── */

const LEAD_CHANNELS = [
  "Social Media Organic",
  "Social Media Ads",
  "Google Ads",
  "SEO / Content",
  "Word of Mouth",
  "Email Marketing",
  "Cold Outreach",
  "Events / Trade Shows",
  "Referral Program",
  "None yet",
];

const BUDGET_OPTIONS = [
  { value: "under_500",   label: "Under $500",  sub: "/ month" },
  { value: "500_2000",    label: "$500 – $2K",  sub: "/ month" },
  { value: "2000_5000",   label: "$2K – $5K",   sub: "/ month" },
  { value: "5000_10000",  label: "$5K – $10K",  sub: "/ month" },
  { value: "over_10000",  label: "$10K+",        sub: "/ month" },
  { value: "flexible",    label: "Not sure yet", sub: "let's talk" },
];

const STEPS = [
  { number: 1, label: "You & Your Company" },
  { number: 2, label: "Your Business" },
  { number: 3, label: "Your Marketing" },
  { number: 4, label: "Vision & Budget" },
];

const INITIAL_DATA = {
  company_name: "",
  contact_name: "",
  email: "",
  phone: "",
  location: "",
  core_offer: "",
  target_customers: "",
  market_location: "",
  lead_channels: [],
  sales_process: "",
  current_tools: "",
  expansion_vision: "",
  budget_range: "",
  expected_results: "",
};

/* ── Validation ─────────────────────────────────────────────── */

function validate(step, data) {
  if (step === 1) {
    if (!data.company_name.trim()) return "Please enter your company name.";
    if (!data.contact_name.trim()) return "Please enter your name.";
    if (!data.email.trim() || !/\S+@\S+\.\S+/.test(data.email))
      return "Please enter a valid email address.";
  }
  if (step === 2) {
    if (!data.core_offer.trim()) return "Please describe your core offer.";
    if (!data.target_customers.trim()) return "Please describe your ideal customers.";
  }
  if (step === 3) {
    if (data.lead_channels.length === 0)
      return "Please select at least one lead channel.";
  }
  if (step === 4) {
    if (!data.budget_range) return "Please select a budget range.";
    if (!data.expected_results.trim()) return "Please share what a win looks like for you.";
  }
  return null;
}

/* ── Progress indicator ─────────────────────────────────────── */

function ProgressBar({ step }) {
  return (
    <div className="contact__progress">
      {STEPS.map((s, i) => (
        <div key={s.number} className="contact__progress-item">
          <div
            className={[
              "contact__progress-circle",
              step >= s.number ? "contact__progress-circle--active" : "",
              step > s.number  ? "contact__progress-circle--done"   : "",
            ].join(" ")}
          >
            {step > s.number ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                width="13" height="13">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : s.number}
          </div>
          <span className={`contact__progress-label${step >= s.number ? " contact__progress-label--active" : ""}`}>
            {s.label}
          </span>
          {i < STEPS.length - 1 && (
            <div className={`contact__progress-line${step > s.number ? " contact__progress-line--active" : ""}`} />
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Main component ─────────────────────────────────────────── */

function Contact() {
  const navigate = useNavigate();
  const [step, setStep]           = useState(1);
  const [direction, setDirection] = useState("forward");
  const [data, setData]           = useState(INITIAL_DATA);
  const [error, setError]         = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const field = (key) => (e) =>
    setData((prev) => ({ ...prev, [key]: e.target.value }));

  const toggleChannel = (ch) =>
    setData((prev) => ({
      ...prev,
      lead_channels: prev.lead_channels.includes(ch)
        ? prev.lead_channels.filter((c) => c !== ch)
        : [...prev.lead_channels, ch],
    }));

  const setBudget = (val) =>
    setData((prev) => ({ ...prev, budget_range: val }));

  const goNext = () => {
    const err = validate(step, data);
    if (err) { setError(err); return; }
    setError(null);
    setDirection("forward");
    setStep((s) => s + 1);
  };

  const goBack = () => {
    setError(null);
    setDirection("backward");
    setStep((s) => s - 1);
  };

  const handleSubmit = async () => {
    const err = validate(4, data);
    if (err) { setError(err); return; }
    setError(null);
    setSubmitting(true);
    try {
      const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;
      if (webhookUrl) {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...data,
            lead_channels: data.lead_channels.join(", "),
            submitted_at: new Date().toISOString(),
          }),
        });
        if (!res.ok) throw new Error("Webhook responded with an error.");
      }
      setSubmitted(true);
    } catch {
      setError("Something went wrong sending your information. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  /* ── Success screen ────────────────────────────────────────── */
  if (submitted) {
    return (
      <main className="contact">
        <div className="contact__success">
          <div className="contact__success-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fcb514"
              strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h1 className="contact__success-title">You're all set!</h1>
          <p className="contact__success-text">
            Thank you for the time you spent filling out this information —
            it tells us a lot and will help us craft something truly useful for you.
          </p>
          <p className="contact__success-subtext">
            We're already reviewing your answers. Expect a detailed email with
            your personalized free consultation results at{" "}
            <span className="contact__success-email">{data.email}</span>{" "}
            within the next 24–48 hours.
          </p>
          <button
            className="cta-button-contactus contact__success-btn"
            onClick={() => navigate("/")}
          >
            BACK TO HOME
          </button>
        </div>
      </main>
    );
  }

  /* ── Multi-step form ───────────────────────────────────────── */
  return (
    <main className="contact">
      <div className="contact__wrapper">

        <div className="contact__header">
          <h1 className="contact__title">Free Consultation</h1>
          <p className="contact__subtitle">
            Fill this out and we'll send you a personalized strategy — completely on us.
            No sales call, no commitment.
          </p>
        </div>

        <ProgressBar step={step} />

        <div key={step} className={`contact__step contact__step--${direction}`}>

          {/* ── Step 1: Identity ─────────────────────────────── */}
          {step === 1 && (
            <div className="contact__fields">
              <h3 className="contact__step-title">Let's get to know you</h3>
              <div className="contact__field-row">
                <div className="contact__field">
                  <label className="contact__label">
                    Company name <span className="contact__req">*</span>
                  </label>
                  <input className="contact__input" type="text"
                    placeholder="e.g. Acme Corp"
                    value={data.company_name} onChange={field("company_name")} />
                </div>
                <div className="contact__field">
                  <label className="contact__label">
                    Your name <span className="contact__req">*</span>
                  </label>
                  <input className="contact__input" type="text"
                    placeholder="e.g. Jane Smith"
                    value={data.contact_name} onChange={field("contact_name")} />
                </div>
              </div>
              <div className="contact__field-row">
                <div className="contact__field">
                  <label className="contact__label">
                    Email <span className="contact__req">*</span>
                  </label>
                  <input className="contact__input" type="email"
                    placeholder="jane@acmecorp.com"
                    value={data.email} onChange={field("email")} />
                </div>
                <div className="contact__field">
                  <label className="contact__label">
                    Phone <span className="contact__opt">(optional)</span>
                  </label>
                  <input className="contact__input" type="tel"
                    placeholder="+1 555 000 0000"
                    value={data.phone} onChange={field("phone")} />
                </div>
              </div>
              <div className="contact__field">
                <label className="contact__label">Where is your company based?</label>
                <input className="contact__input" type="text"
                  placeholder="e.g. Miami, USA"
                  value={data.location} onChange={field("location")} />
              </div>
            </div>
          )}

          {/* ── Step 2: Business profile ──────────────────────── */}
          {step === 2 && (
            <div className="contact__fields">
              <h3 className="contact__step-title">Tell us about your business</h3>
              <div className="contact__field">
                <label className="contact__label">
                  What does your company do? What's the core of your offer?{" "}
                  <span className="contact__req">*</span>
                </label>
                <textarea className="contact__input contact__textarea"
                  placeholder="We sell premium handmade furniture to interior designers and homeowners across the US. Our differentiator is fully custom finishes with 3-week delivery..."
                  value={data.core_offer} onChange={field("core_offer")} rows={4} />
              </div>
              <div className="contact__field">
                <label className="contact__label">
                  Who are your ideal customers? Paint us a picture.{" "}
                  <span className="contact__req">*</span>
                </label>
                <textarea className="contact__input contact__textarea"
                  placeholder="Small business owners aged 30–50, based in major cities, who value quality over price and are active on Instagram and LinkedIn..."
                  value={data.target_customers} onChange={field("target_customers")} rows={3} />
              </div>
              <div className="contact__field">
                <label className="contact__label">
                  Where is your primary market?
                </label>
                <input className="contact__input" type="text"
                  placeholder="e.g. National (USA), Latin America, or Global"
                  value={data.market_location} onChange={field("market_location")} />
              </div>
            </div>
          )}

          {/* ── Step 3: Current marketing ─────────────────────── */}
          {step === 3 && (
            <div className="contact__fields">
              <h3 className="contact__step-title">How do you market and sell today?</h3>
              <div className="contact__field">
                <label className="contact__label">
                  How do you currently attract new leads?{" "}
                  <span className="contact__req">*</span>{" "}
                  <span className="contact__opt">Select all that apply</span>
                </label>
                <div className="contact__pills">
                  {LEAD_CHANNELS.map((ch) => (
                    <button key={ch} type="button"
                      className={`contact__pill${data.lead_channels.includes(ch) ? " contact__pill--active" : ""}`}
                      onClick={() => toggleChannel(ch)}>
                      {ch}
                    </button>
                  ))}
                </div>
              </div>
              <div className="contact__field">
                <label className="contact__label">
                  How do you close deals and retain clients?
                </label>
                <textarea className="contact__input contact__textarea"
                  placeholder="We follow up by phone, then send a proposal via email. Retention is mostly repeat orders, referrals, and a monthly newsletter..."
                  value={data.sales_process} onChange={field("sales_process")} rows={3} />
              </div>
              <div className="contact__field">
                <label className="contact__label">
                  What tools or software do you currently use?
                </label>
                <input className="contact__input" type="text"
                  placeholder="e.g. HubSpot CRM, Mailchimp, Shopify, QuickBooks — or None"
                  value={data.current_tools} onChange={field("current_tools")} />
              </div>
            </div>
          )}

          {/* ── Step 4: Vision & budget ───────────────────────── */}
          {step === 4 && (
            <div className="contact__fields">
              <h3 className="contact__step-title">Your vision and investment</h3>
              <div className="contact__field">
                <label className="contact__label">
                  Do you see room to grow or expand? Where and how?
                </label>
                <textarea className="contact__input contact__textarea"
                  placeholder="We'd like to expand into Mexico and Colombia. We think e-commerce and social media ads could work really well for us given our price point..."
                  value={data.expansion_vision} onChange={field("expansion_vision")} rows={3} />
              </div>
              <div className="contact__field">
                <label className="contact__label">
                  Approximate monthly marketing budget{" "}
                  <span className="contact__req">*</span>
                </label>
                <div className="contact__budget-grid">
                  {BUDGET_OPTIONS.map((opt) => (
                    <button key={opt.value} type="button"
                      className={`contact__budget-card${data.budget_range === opt.value ? " contact__budget-card--active" : ""}`}
                      onClick={() => setBudget(opt.value)}>
                      <span className="contact__budget-amount">{opt.label}</span>
                      <span className="contact__budget-sub">{opt.sub}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="contact__field">
                <label className="contact__label">
                  What would a real win look like for you in the next 6 months?{" "}
                  <span className="contact__req">*</span>
                </label>
                <textarea className="contact__input contact__textarea"
                  placeholder="Doubling our monthly leads, reaching 10k followers on Instagram, or landing our first 100 online orders without relying on cold calls..."
                  value={data.expected_results} onChange={field("expected_results")} rows={3} />
              </div>
            </div>
          )}

        </div>

        {error && (
          <p key={error} className="contact__error">{error}</p>
        )}

        <div className="contact__nav">
          {step > 1 && (
            <button type="button" className="contact__btn-back" onClick={goBack}>
              ← Back
            </button>
          )}
          {step < 4 ? (
            <button type="button" className="cta-button-contactus contact__btn-next" onClick={goNext}>
              Continue →
            </button>
          ) : (
            <button type="button" className="cta-button-contactus contact__btn-next"
              onClick={handleSubmit} disabled={submitting}>
              {submitting ? "Sending…" : "Get My Free Consultation →"}
            </button>
          )}
        </div>

      </div>
    </main>
  );
}

export default Contact;

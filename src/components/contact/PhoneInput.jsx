import { useEffect, useRef, useState } from "react";
import { COUNTRIES, flagEmoji } from "../../data/countries";

/* Country dial-code dropdown (searchable, flag icons) + a digits-only
   number field. Emits a single combined string via onChange, e.g.
   "+1 5551234567", so the parent can keep storing phone as one field. */
function PhoneInput({ onChange }) {
  const [country, setCountry] = useState(null);
  const [number, setNumber] = useState("");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const emit = (c, num) => {
    onChange(c ? `+${c.dial}${num}` : num);
  };

  const selectCountry = (c) => {
    setCountry(c);
    setOpen(false);
    setSearch("");
    emit(c, number);
  };

  const handleNumberChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "");
    setNumber(digits);
    emit(country, digits);
  };

  const digitSearch = search.replace(/\D/g, "");
  const filtered = COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      (digitSearch && c.dial.includes(digitSearch)),
  );

  return (
    <div className="contact__phone" ref={containerRef}>
      <button
        type="button"
        className="contact__phone-code"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="contact__phone-flag">{flagEmoji(country?.iso2)}</span>
        <span>{country ? `+${country.dial}` : "Code"}</span>
        <svg
          viewBox="0 0 24 24"
          width="10"
          height="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <input
        className="contact__input contact__phone-number"
        type="tel"
        inputMode="numeric"
        placeholder="555 000 0000"
        value={number}
        onChange={handleNumberChange}
      />
      {open && (
        <div className="contact__phone-dropdown">
          <input
            autoFocus
            className="contact__phone-search"
            type="text"
            placeholder="Search country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="contact__phone-list">
            {filtered.map((c) => (
              <button
                type="button"
                key={c.iso2}
                className="contact__phone-option"
                onClick={() => selectCountry(c)}
              >
                <span className="contact__phone-flag">{flagEmoji(c.iso2)}</span>
                <span className="contact__phone-option-name">{c.name}</span>
                <span className="contact__phone-option-dial">+{c.dial}</span>
              </button>
            ))}
            {filtered.length === 0 && (
              <div className="contact__phone-empty">No matches</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PhoneInput;

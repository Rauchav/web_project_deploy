import { useEffect, useRef, useState } from "react";
import { CITIES } from "../../data/locations";
import { REGIONS } from "../../data/regions";

/* Chip-based multi-select for "where do you operate" — a business can
   span several cities, countries, or whole continents at once.
   Suggests broad regions up front, narrows to cities/countries as the
   user types, and still accepts a typed custom value via Enter. */
function MarketSelect({ value, onChange, placeholder }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const q = query.trim().toLowerCase();
  const pool = q ? [...REGIONS, ...CITIES] : REGIONS;
  const suggestions = pool
    .filter((item) => !value.includes(item))
    .filter((item) => !q || item.toLowerCase().includes(q))
    .slice(0, 8);

  const addValue = (item) => {
    const trimmed = item.trim();
    if (!trimmed || value.includes(trimmed)) return;
    onChange([...value, trimmed]);
    setQuery("");
    setOpen(false);
  };

  const removeValue = (item) => {
    onChange(value.filter((v) => v !== item));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (query.trim()) addValue(query);
    } else if (e.key === "Backspace" && !query && value.length > 0) {
      removeValue(value[value.length - 1]);
    }
  };

  return (
    <div className="contact__multiselect" ref={containerRef}>
      {value.length > 0 && (
        <div className="contact__chips">
          {value.map((item) => (
            <span key={item} className="contact__chip">
              {item}
              <button
                type="button"
                className="contact__chip-remove"
                onClick={() => removeValue(item)}
                aria-label={`Remove ${item}`}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
      <input
        className="contact__input"
        type="text"
        placeholder={value.length ? "Add another region, country, or city…" : placeholder}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={handleKeyDown}
        autoComplete="off"
      />
      {open && suggestions.length > 0 && (
        <div className="contact__combobox-list">
          {suggestions.map((item) => (
            <button
              type="button"
              key={item}
              className="contact__combobox-option"
              onClick={() => addValue(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default MarketSelect;

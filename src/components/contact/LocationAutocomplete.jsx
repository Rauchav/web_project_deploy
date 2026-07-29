import { useEffect, useRef, useState } from "react";
import { CITIES } from "../../data/locations";

/* Type-to-filter city/country suggestions. Purely an assist — the
   field stays free text, so a city missing from the curated list can
   still be typed in and submitted as-is. */
function LocationAutocomplete({ value, onChange, placeholder }) {
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

  const query = value.trim().toLowerCase();
  const suggestions = query
    ? CITIES.filter((c) => c.toLowerCase().includes(query)).slice(0, 8)
    : [];

  const select = (city) => {
    onChange(city);
    setOpen(false);
  };

  return (
    <div className="contact__combobox" ref={containerRef}>
      <input
        className="contact__input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        autoComplete="off"
      />
      {open && suggestions.length > 0 && (
        <div className="contact__combobox-list">
          {suggestions.map((city) => (
            <button
              type="button"
              key={city}
              className="contact__combobox-option"
              onClick={() => select(city)}
            >
              {city}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LocationAutocomplete;

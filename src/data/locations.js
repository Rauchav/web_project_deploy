/* ── City/country suggestions ────────────────────────────────────
   Curated static list covering major markets across every region.
   Used to power the type-to-filter suggestions on the location
   fields — it's an assist, not a hard restriction, so users whose
   city isn't listed can still type a custom value. */

export const CITIES = [
  // North America
  "New York, United States", "Los Angeles, United States", "Chicago, United States",
  "Houston, United States", "Miami, United States", "San Francisco, United States",
  "Seattle, United States", "Boston, United States", "Austin, United States",
  "Dallas, United States", "Atlanta, United States", "Denver, United States",
  "Washington, United States", "Phoenix, United States", "Philadelphia, United States",
  "San Diego, United States", "Las Vegas, United States", "Orlando, United States",
  "Toronto, Canada", "Vancouver, Canada", "Montreal, Canada", "Calgary, Canada", "Ottawa, Canada",
  "Mexico City, Mexico", "Guadalajara, Mexico", "Monterrey, Mexico", "Cancun, Mexico", "Tijuana, Mexico",

  // Central America & Caribbean
  "San Jose, Costa Rica", "Panama City, Panama", "San Salvador, El Salvador",
  "Guatemala City, Guatemala", "Tegucigalpa, Honduras", "Managua, Nicaragua",
  "Havana, Cuba", "Santo Domingo, Dominican Republic", "San Juan, Puerto Rico", "Kingston, Jamaica",

  // South America
  "Bogota, Colombia", "Medellin, Colombia", "Cali, Colombia",
  "Lima, Peru", "Santiago, Chile", "Buenos Aires, Argentina", "Cordoba, Argentina",
  "Sao Paulo, Brazil", "Rio de Janeiro, Brazil", "Brasilia, Brazil", "Belo Horizonte, Brazil",
  "Caracas, Venezuela", "Quito, Ecuador", "Guayaquil, Ecuador",
  "Montevideo, Uruguay", "Asuncion, Paraguay", "La Paz, Bolivia", "Santa Cruz, Bolivia",

  // Europe
  "London, United Kingdom", "Manchester, United Kingdom", "Birmingham, United Kingdom",
  "Edinburgh, United Kingdom", "Dublin, Ireland",
  "Paris, France", "Lyon, France", "Marseille, France",
  "Berlin, Germany", "Munich, Germany", "Frankfurt, Germany", "Hamburg, Germany",
  "Madrid, Spain", "Barcelona, Spain", "Valencia, Spain", "Seville, Spain",
  "Rome, Italy", "Milan, Italy", "Naples, Italy", "Turin, Italy",
  "Lisbon, Portugal", "Porto, Portugal",
  "Amsterdam, Netherlands", "Rotterdam, Netherlands", "Brussels, Belgium",
  "Zurich, Switzerland", "Geneva, Switzerland", "Vienna, Austria",
  "Stockholm, Sweden", "Gothenburg, Sweden", "Oslo, Norway",
  "Copenhagen, Denmark", "Helsinki, Finland",
  "Warsaw, Poland", "Krakow, Poland", "Prague, Czech Republic", "Budapest, Hungary",
  "Bucharest, Romania", "Sofia, Bulgaria", "Athens, Greece",
  "Istanbul, Turkey", "Ankara, Turkey", "Moscow, Russia", "Saint Petersburg, Russia",
  "Kyiv, Ukraine", "Zagreb, Croatia", "Belgrade, Serbia",

  // Middle East
  "Dubai, United Arab Emirates", "Abu Dhabi, United Arab Emirates",
  "Doha, Qatar", "Riyadh, Saudi Arabia", "Jeddah, Saudi Arabia",
  "Kuwait City, Kuwait", "Manama, Bahrain", "Muscat, Oman",
  "Tel Aviv, Israel", "Jerusalem, Israel", "Amman, Jordan", "Beirut, Lebanon",
  "Cairo, Egypt", "Alexandria, Egypt",

  // Africa
  "Lagos, Nigeria", "Abuja, Nigeria", "Nairobi, Kenya",
  "Johannesburg, South Africa", "Cape Town, South Africa", "Durban, South Africa",
  "Casablanca, Morocco", "Rabat, Morocco", "Tunis, Tunisia", "Algiers, Algeria",
  "Accra, Ghana", "Addis Ababa, Ethiopia", "Dar es Salaam, Tanzania",
  "Kampala, Uganda", "Dakar, Senegal",

  // Asia
  "Tokyo, Japan", "Osaka, Japan", "Yokohama, Japan",
  "Seoul, South Korea", "Busan, South Korea",
  "Beijing, China", "Shanghai, China", "Shenzhen, China", "Guangzhou, China", "Hong Kong, China",
  "Taipei, Taiwan", "Singapore, Singapore", "Kuala Lumpur, Malaysia",
  "Bangkok, Thailand", "Jakarta, Indonesia", "Manila, Philippines",
  "Ho Chi Minh City, Vietnam", "Hanoi, Vietnam",
  "Mumbai, India", "Delhi, India", "Bangalore, India", "Hyderabad, India",
  "Chennai, India", "Kolkata, India", "Pune, India",
  "Karachi, Pakistan", "Lahore, Pakistan", "Islamabad, Pakistan",
  "Dhaka, Bangladesh", "Colombo, Sri Lanka",

  // Oceania
  "Sydney, Australia", "Melbourne, Australia", "Brisbane, Australia", "Perth, Australia",
  "Auckland, New Zealand", "Wellington, New Zealand",
];

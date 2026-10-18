// A project's production period comes from its GitHub history: first commit → last commit.
const MONTHS = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  id: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
};

export function parseDay(s) {
  if (!s) return null;
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d || 1);
}

// Only projects we still run are marked ongoing (set in Admin); everything else ends at its last commit.
export function isOngoing(period) {
  return !!period?.ongoing;
}

const label = (d, lang) => `${(MONTHS[lang] || MONTHS.en)[d.getMonth()]} ${d.getFullYear()}`;

export function formatPeriod(period, lang = "en") {
  const s = parseDay(period?.start);
  const e = parseDay(period?.end);
  if (!s) return "";
  if (isOngoing(period)) return `${label(s, lang)} – ${lang === "id" ? "Sekarang" : "Present"}`;
  if (!e || (s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth())) return label(s, lang);
  return `${label(s, lang)} – ${label(e, lang)}`;
}

// Newest first: still-running projects, then by last commit, then by start date.
export function byRecent(a, b) {
  const end = (p) => (isOngoing(p.period) ? Infinity : parseDay(p.period?.end)?.getTime() ?? -Infinity);
  const start = (p) => parseDay(p.period?.start)?.getTime() ?? -Infinity;
  return end(b) - end(a) || start(b) - start(a);
}

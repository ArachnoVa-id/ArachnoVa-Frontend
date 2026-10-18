// A project's production period comes from its GitHub history: first commit → last commit.
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const ONGOING_DAYS = 45; // a commit this recent means the project is still being worked on

export function parseDay(s) {
  if (!s) return null;
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d || 1);
}

export function isOngoing(period, now = new Date()) {
  const end = parseDay(period?.end);
  return !!end && (now - end) / 86400000 <= ONGOING_DAYS;
}

const label = (d) => `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;

export function formatPeriod(period) {
  const s = parseDay(period?.start);
  const e = parseDay(period?.end);
  if (!s) return "";
  if (isOngoing(period)) return `${label(s)} – Present`;
  if (!e || (s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth())) return label(s);
  return `${label(s)} – ${label(e)}`;
}

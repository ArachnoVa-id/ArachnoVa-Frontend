export default function WebPattern({ opacity = 0.03, className = "" }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity }}
      viewBox="0 0 1200 800"
      preserveAspectRatio="none"
    >
      <line x1="0" y1="200" x2="1200" y2="200" stroke="#1AB0C8" strokeWidth="0.5" />
      <line x1="0" y1="400" x2="1200" y2="400" stroke="#1AB0C8" strokeWidth="0.5" />
      <line x1="0" y1="600" x2="1200" y2="600" stroke="#1AB0C8" strokeWidth="0.5" />
      <line x1="300" y1="0" x2="300" y2="800" stroke="#1AB0C8" strokeWidth="0.5" />
      <line x1="600" y1="0" x2="600" y2="800" stroke="#1AB0C8" strokeWidth="0.5" />
      <line x1="900" y1="0" x2="900" y2="800" stroke="#1AB0C8" strokeWidth="0.5" />
      <line x1="0" y1="0" x2="1200" y2="800" stroke="#1AB0C8" strokeWidth="0.3" />
      <line x1="1200" y1="0" x2="0" y2="800" stroke="#1AB0C8" strokeWidth="0.3" />
      <circle cx="600" cy="400" r="300" fill="none" stroke="#1AB0C8" strokeWidth="0.3" />
      <circle cx="600" cy="400" r="200" fill="none" stroke="#1AB0C8" strokeWidth="0.3" />
      <circle cx="600" cy="400" r="100" fill="none" stroke="#1AB0C8" strokeWidth="0.3" />
    </svg>
  );
}

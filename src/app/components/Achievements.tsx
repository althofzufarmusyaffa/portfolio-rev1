import { SectionHeader } from "./About";

const stats = [
  {
    value: "15+",
    label: "Projects Built",
    icon: "🚀",
    color: "#38BDF8",
  },
  {
    value: "8",
    label: "GitHub Repositories",
    icon: "🐙",
    color: "#6366F1",
  },
  {
    value: "1",
    label: "Scholarship Award",
    icon: "🏆",
    color: "#F59E0B",
  },
  {
    value: "15+",
    label: "Technologies Explored",
    icon: "🧠",
    color: "#22C55E",
  },
  {
    value: "1",
    label: "Internship Experience",
    icon: "💼",
    color: "#A855F7",
  },
  {
    value: "2023",
    label: "Started Engineering Journey",
    icon: "🎓",
    color: "#2563EB",
  },
];

export function Achievements() {
  return (
    <section
      id="achievements"
      style={{ padding: "7rem 2rem", maxWidth: "1200px", margin: "0 auto" }}
    >
      <SectionHeader number="05" title="Achievements" subtitle="Numbers that tell the story so far" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {stats.map(({ value, label, icon, color }) => (
          <div
            key={label}
            style={{
              background: "rgba(26,34,56,0.6)",
              border: "1px solid rgba(56,189,248,0.1)",
              borderRadius: "20px",
              padding: "1.75rem 1.5rem",
              backdropFilter: "blur(20px)",
              textAlign: "center",
              transition: "all 0.25s",
              cursor: "default",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = `${color}40`;
              el.style.transform = "translateY(-4px)";
              el.style.boxShadow = `0 12px 40px ${color}18`;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(56,189,248,0.1)";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            {/* Glow orb */}
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: `${color}10`,
                pointerEvents: "none",
              }}
            />
            <div style={{ fontSize: "2.2rem", marginBottom: "0.75rem" }}>{icon}</div>
            <div
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "2.2rem",
                fontWeight: 800,
                background: `linear-gradient(135deg, ${color}, #fff)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}
            >
              {value}
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.83rem",
                color: "#94A3B8",
                fontWeight: 500,
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

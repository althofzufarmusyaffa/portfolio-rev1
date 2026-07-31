import { SectionHeader } from "./About";

const techs = [
  { name: "Flutter", color: "#54C5F8", emoji: "🐦" },
  { name: "Unity", color: "#AAAAAA", emoji: "🎮" },
  { name: "Firebase", color: "#FFCA28", emoji: "🔥" },
  { name: "Laravel", color: "#FF2D20", emoji: "🌐" },
  { name: "Git", color: "#F05032", emoji: "🌿" },
  { name: "Docker", color: "#2496ED", emoji: "🐳" },
  { name: "Linux", color: "#FCC624", emoji: "🐧" },
  { name: "Arduino", color: "#00979C", emoji: "⚡" },
  { name: "ESP32", color: "#E7352C", emoji: "📡" },
  { name: "Raspberry Pi", color: "#C51A4A", emoji: "🍓" },
  { name: "TensorFlow", color: "#FF6F00", emoji: "🧠" },
  { name: "OpenCV", color: "#5C3EE8", emoji: "👁️" },
  { name: "Python", color: "#3776AB", emoji: "🐍" },
  { name: "Dart", color: "#54C5F8", emoji: "🎯" },
  { name: "C#", color: "#9B59B6", emoji: "🔷" },
  { name: "JavaScript", color: "#F7DF1E", emoji: "✨" },
  { name: "Figma", color: "#A259FF", emoji: "🎨" },
  { name: "VS Code", color: "#007ACC", emoji: "💻" },
  { name: "Cisco", color: "#1BA0D7", emoji: "🌐" },
  { name: "Blender", color: "#F5792A", emoji: "🎭" },
];

// Duplicate for seamless scroll
const row1 = [...techs.slice(0, 10), ...techs.slice(0, 10)];
const row2 = [...techs.slice(10), ...techs.slice(10)];

export function TechStack() {
  return (
    <section
      id="techstack"
      style={{ padding: "7rem 0", maxWidth: "100%", overflow: "hidden" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", marginBottom: "3.5rem" }}>
        <SectionHeader number="07" title="Tech Stack" subtitle="Languages, tools, and platforms I work with regularly" />
      </div>

      {/* Scrolling row 1 — left */}
      <div style={{ overflow: "hidden", marginBottom: "1rem" }}>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            animation: "scrollLeft 30s linear infinite",
            width: "max-content",
          }}
        >
          {row1.map((t, i) => (
            <TechChip key={`r1-${i}`} {...t} />
          ))}
        </div>
      </div>

      {/* Scrolling row 2 — right */}
      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            animation: "scrollRight 35s linear infinite",
            width: "max-content",
          }}
        >
          {row2.map((t, i) => (
            <TechChip key={`r2-${i}`} {...t} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}

function TechChip({ name, color, emoji }: { name: string; color: string; emoji: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.6rem",
        padding: "0.6rem 1.1rem",
        background: "rgba(26,34,56,0.7)",
        border: `1px solid ${color}20`,
        borderRadius: "100px",
        backdropFilter: "blur(10px)",
        flexShrink: 0,
        transition: "all 0.2s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = `${color}50`;
        el.style.boxShadow = `0 0 16px ${color}20`;
        el.style.transform = "scale(1.04)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = `${color}20`;
        el.style.boxShadow = "none";
        el.style.transform = "scale(1)";
      }}
    >
      <span style={{ fontSize: "1rem" }}>{emoji}</span>
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.82rem",
          fontWeight: 500,
          color: "#D4E8FF",
          whiteSpace: "nowrap",
        }}
      >
        {name}
      </span>
    </div>
  );
}

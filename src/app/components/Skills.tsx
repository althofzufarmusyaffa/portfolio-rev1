import { useState } from "react";
import { SectionHeader } from "./About";

const categories = [
  {
    id: "languages",
    label: "Languages",
    emoji: "💬",
    skills: [
      { name: "Dart", level: 90, exp: "3y", color: "#54C5F8" },
      { name: "C#", level: 82, exp: "2y", color: "#9B59B6" },
      { name: "Python", level: 85, exp: "3y", color: "#3776AB" },
      { name: "Java", level: 70, exp: "2y", color: "#F89820" },
      { name: "PHP", level: 65, exp: "1.5y", color: "#8892BF" },
      { name: "JavaScript", level: 78, exp: "2y", color: "#F7DF1E" },
      { name: "SQL", level: 80, exp: "2y", color: "#FF7B00" },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    emoji: "🧩",
    skills: [
      { name: "Flutter", level: 90, exp: "3y", color: "#54C5F8" },
      { name: "Laravel", level: 68, exp: "1.5y", color: "#FF2D20" },
      { name: "Unity", level: 80, exp: "2y", color: "#AAAAAA" },
      { name: "Firebase", level: 82, exp: "2.5y", color: "#FFCA28" },
    ],
  },
  {
    id: "gamedev",
    label: "Game Dev",
    emoji: "🎮",
    skills: [
      { name: "Unity", level: 80, exp: "2y", color: "#AAAAAA" },
      { name: "Godot", level: 60, exp: "1y", color: "#478CBF" },
      { name: "Blender", level: 45, exp: "0.5y", color: "#F5792A" },
      { name: "Shader Graph", level: 65, exp: "1y", color: "#9B59B6" },
    ],
  },
  {
    id: "ai",
    label: "AI & ML",
    emoji: "🤖",
    skills: [
      { name: "TensorFlow", level: 65, exp: "1.5y", color: "#FF6F00" },
      { name: "OpenCV", level: 70, exp: "1.5y", color: "#5C3EE8" },
      { name: "Computer Vision", level: 68, exp: "1.5y", color: "#38BDF8" },
    ],
  },
  {
    id: "iot",
    label: "IoT & Embedded",
    emoji: "📡",
    skills: [
      { name: "Arduino", level: 82, exp: "2.5y", color: "#00979C" },
      { name: "ESP32", level: 75, exp: "2y", color: "#E7352C" },
      { name: "MQTT", level: 68, exp: "1.5y", color: "#660066" },
      { name: "Firebase RT DB", level: 78, exp: "2y", color: "#FFCA28" },
    ],
  },
  {
    id: "networking",
    label: "Networking",
    emoji: "🌐",
    skills: [
      { name: "Cisco", level: 65, exp: "1.5y", color: "#1BA0D7" },
      { name: "MikroTik", level: 60, exp: "1y", color: "#CC0000" },
      { name: "VLAN", level: 70, exp: "1.5y", color: "#38BDF8" },
      { name: "Routing", level: 68, exp: "1.5y", color: "#2563EB" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    emoji: "🛠️",
    skills: [
      { name: "Git", level: 88, exp: "3y", color: "#F05032" },
      { name: "GitHub", level: 90, exp: "3y", color: "#fff" },
      { name: "VS Code", level: 95, exp: "3y", color: "#007ACC" },
      { name: "Android Studio", level: 82, exp: "2.5y", color: "#3DDC84" },
      { name: "Figma", level: 70, exp: "1.5y", color: "#A259FF" },
      { name: "Docker", level: 60, exp: "1y", color: "#2496ED" },
      { name: "Linux", level: 75, exp: "2y", color: "#FCC624" },
    ],
  },
];

export function Skills() {
  const [active, setActive] = useState("languages");

  const cat = categories.find((c) => c.id === active)!;

  return (
    <section
      id="skills"
      style={{
        padding: "7rem 2rem",
        background: "rgba(17,24,39,0.4)",
        borderTop: "1px solid rgba(56,189,248,0.06)",
        borderBottom: "1px solid rgba(56,189,248,0.06)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader number="02" title="Skills & Technologies" subtitle="My technical toolkit across different domains" />

        {/* Category tabs */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            marginBottom: "2.5rem",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.5rem 1rem",
                background: active === cat.id
                  ? "linear-gradient(135deg, #2563EB, #38BDF8)"
                  : "rgba(26,34,56,0.6)",
                border: active === cat.id
                  ? "none"
                  : "1px solid rgba(56,189,248,0.12)",
                borderRadius: "100px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.82rem",
                fontWeight: active === cat.id ? 600 : 400,
                color: active === cat.id ? "#fff" : "#94A3B8",
                cursor: "pointer",
                backdropFilter: "blur(10px)",
                transition: "all 0.2s",
                boxShadow: active === cat.id ? "0 0 16px rgba(37,99,235,0.35)" : "none",
              }}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1rem",
          }}
        >
          {cat.skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  name,
  level,
  exp,
  color,
}: {
  name: string;
  level: number;
  exp: string;
  color: string;
}) {
  const levelLabel =
    level >= 85 ? "Expert" : level >= 70 ? "Advanced" : level >= 55 ? "Intermediate" : "Beginner";

  return (
    <div
      style={{
        background: "rgba(26,34,56,0.6)",
        border: "1px solid rgba(56,189,248,0.1)",
        borderRadius: "18px",
        padding: "1.4rem",
        backdropFilter: "blur(20px)",
        transition: "all 0.25s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(56,189,248,0.3)";
        el.style.transform = "translateY(-3px)";
        el.style.boxShadow = "0 8px 32px rgba(37,99,235,0.15)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(56,189,248,0.1)";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
        {/* Icon dot */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: `${color}18`,
              border: `1.5px solid ${color}30`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              fontWeight: 700,
              color,
            }}
          >
            {name.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "#fff" }}>
              {name}
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.62rem", color: "#4A5568" }}>
              {exp} experience
            </div>
          </div>
        </div>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.62rem",
            color: color,
            background: `${color}15`,
            border: `1px solid ${color}25`,
            borderRadius: "6px",
            padding: "0.15rem 0.45rem",
          }}
        >
          {levelLabel}
        </span>
      </div>

      {/* Progress bar */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <div
          style={{
            flex: 1,
            height: "5px",
            background: "rgba(56,189,248,0.08)",
            borderRadius: "100px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${level}%`,
              background: `linear-gradient(90deg, #2563EB, ${color})`,
              borderRadius: "100px",
            }}
          />
        </div>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.72rem",
            color: "#94A3B8",
            minWidth: "30px",
          }}
        >
          {level}%
        </span>
      </div>
    </div>
  );
}

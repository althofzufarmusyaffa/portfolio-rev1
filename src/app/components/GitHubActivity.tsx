import { Github, GitCommit, Star, GitFork } from "lucide-react";
import { SectionHeader } from "./About";

// Generate 52 weeks × 7 days of fake activity
function generateHeatmap() {
  const data: number[] = [];
  for (let w = 0; w < 52; w++) {
    for (let d = 0; d < 7; d++) {
      // Higher activity on weekdays
      const base = d < 5 ? Math.random() * 5 : Math.random() * 2;
      // Occasional spikes
      const spike = Math.random() > 0.92 ? 4 : 0;
      data.push(Math.floor(base + spike));
    }
  }
  return data;
}

const heatmap = generateHeatmap();
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const repos = [  {
    name: "portfolio-website",
    desc: "Personal portfolio website built with React, TypeScript, and Tailwind CSS.",
    stars: 0,
    forks: 0,
    lang: "TypeScript",
    langColor: "#3178C6",
  },
  {
    name: "smart-parking-system",
    desc: "IoT-based smart parking monitoring system using ESP32, Firebase Realtime Database, and Laravel.",
    stars: 0,
    forks: 0,
    lang: "PHP",
    langColor: "#8892BF",
  },
  {
    name: "flutter-training",
    desc: "Collection of Flutter learning projects covering UI, state management, and REST API integration.",
    stars: 0,
    forks: 0,
    lang: "Dart",
    langColor: "#54C5F8",
  },
  {
    name: "unity-game-project",
    desc: "Personal Unity game development projects exploring gameplay mechanics and C# scripting.",
    stars: 0,
    forks: 0,
    lang: "C#",
    langColor: "#9B59B6",
  },];

function cellColor(v: number) {
  if (v === 0) return "rgba(26,34,56,0.8)";
  if (v === 1) return "rgba(37,99,235,0.25)";
  if (v === 2) return "rgba(37,99,235,0.5)";
  if (v === 3) return "rgba(56,189,248,0.6)";
  return "rgba(56,189,248,0.9)";
}

export function GitHubActivity() {
  const total = heatmap.reduce((a, b) => a + b, 0);

  return (
    <section
      id="github"
      style={{
        padding: "7rem 2rem",
        background: "rgba(17,24,39,0.4)",
        borderTop: "1px solid rgba(56,189,248,0.06)",
        borderBottom: "1px solid rgba(56,189,248,0.06)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader number="08" title="GitHub Activity" subtitle="Consistent commits, open source contributions, and pinned projects" />

        {/* Heatmap */}
        <div
          style={{
            background: "rgba(26,34,56,0.6)",
            border: "1px solid rgba(56,189,248,0.1)",
            borderRadius: "20px",
            padding: "1.75rem",
            backdropFilter: "blur(20px)",
            marginBottom: "2rem",
            overflowX: "auto",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <Github size={18} color="#38BDF8" />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "#fff" }}>
              tofu-dev
            </span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "#94A3B8" }}>
              {total.toLocaleString()} contributions this year
            </span>
          </div>

          {/* Month labels */}
          <div style={{ display: "flex", gap: "2px", marginBottom: "4px", paddingLeft: "16px" }}>
            {months.map((m, i) => (
              <span
                key={m}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.58rem",
                  color: "#4A5568",
                  width: `${(52 / 12) * 11}px`,
                  display: i < 12 ? "block" : "none",
                }}
              >
                {m}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: "flex", gap: "2px", alignItems: "flex-start" }}>
            {/* Day labels */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginRight: "4px" }}>
              {["", "M", "", "W", "", "F", ""].map((d, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.55rem",
                    color: "#4A5568",
                    lineHeight: "11px",
                    height: "11px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {d}
                </span>
              ))}
            </div>

            {/* Cells */}
            {Array.from({ length: 52 }, (_, w) => (
              <div key={w} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                {Array.from({ length: 7 }, (_, d) => {
                  const v = heatmap[w * 7 + d];
                  return (
                    <div
                      key={d}
                      title={`${v} contributions`}
                      style={{
                        width: "11px",
                        height: "11px",
                        borderRadius: "2px",
                        background: cellColor(v),
                        transition: "transform 0.1s",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "scale(1.3)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginTop: "0.75rem", justifyContent: "flex-end" }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "#4A5568" }}>Less</span>
            {[0, 1, 2, 3, 4].map((v) => (
              <div
                key={v}
                style={{
                  width: "11px",
                  height: "11px",
                  borderRadius: "2px",
                  background: cellColor(v),
                }}
              />
            ))}
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "#4A5568" }}>More</span>
          </div>
        </div>

        {/* Pinned repos */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1rem",
          }}
        >
          {repos.map((repo) => (
            <a
              key={repo.name}
              href="#"
              style={{
                display: "block",
                background: "rgba(26,34,56,0.6)",
                border: "1px solid rgba(56,189,248,0.1)",
                borderRadius: "16px",
                padding: "1.25rem",
                backdropFilter: "blur(16px)",
                textDecoration: "none",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(56,189,248,0.3)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(56,189,248,0.1)";
                el.style.transform = "translateY(0)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <GitCommit size={14} color="#38BDF8" />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", fontWeight: 600, color: "#38BDF8" }}>
                  {repo.name}
                </span>
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#94A3B8", lineHeight: 1.6, marginBottom: "1rem" }}>
                {repo.desc}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: repo.langColor }} />
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#94A3B8" }}>{repo.lang}</span>
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "4px", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#94A3B8" }}>
                  <Star size={11} /> {repo.stars}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "4px", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#94A3B8" }}>
                  <GitFork size={11} /> {repo.forks}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import { SectionHeader } from "./About";
import { CheckCircle2, Circle, Clock } from "lucide-react";

type Status = "done" | "active" | "upcoming";

const tracks: { label: string; color: string; steps: { name: string; status: Status; note?: string }[] }[] = [
  {
    label: "Mobile Development",
    color: "#54C5F8",
    steps: [
      { name: "Dart Fundamentals", status: "done" },
      { name: "Flutter Basics & Widgets", status: "done" },
      { name: "State Management", status: "done" },
      { name: "Firebase Integration", status: "done" },
      { name: "REST API Integration", status: "active", note: "Currently learning" },
      { name: "Clean Architecture", status: "upcoming" },
    ],
  },
  {
    label: "Backend Development",
    color: "#FF2D20",
    steps: [
      { name: "PHP Fundamentals", status: "done" },
      { name: "Laravel Basics", status: "done" },
      { name: "CRUD Application", status: "done" },
      { name: "REST API Development", status: "active", note: "Currently learning" },
      { name: "Authentication & Authorization", status: "upcoming" },
      { name: "Deployment", status: "upcoming" },
    ],
  },
  {
    label: "Game Development",
    color: "#AAAAAA",
    steps: [
      { name: "Unity Fundamentals", status: "done" },
      { name: "C# Scripting", status: "done" },
      { name: "2D Game Development", status: "active", note: "Personal projects" },
      { name: "Game Architecture", status: "upcoming" },
      { name: "UI & Animation", status: "upcoming" },
    ],
  },
  {
    label: "IoT & AI",
    color: "#22C55E",
    steps: [
      { name: "Arduino & ESP32", status: "done" },
      { name: "Firebase Realtime Database", status: "done" },
      { name: "Machine Learning Basics", status: "done" },
      { name: "AI-powered IoT Systems", status: "done" },
      { name: "Computer Vision", status: "active", note: "Research & learning" },
    ],
  },
];

const statusIcon = (s: Status) => {
  if (s === "done") return <CheckCircle2 size={14} color="#22C55E" />;
  if (s === "active") return <Clock size={14} color="#38BDF8" />;
  return <Circle size={14} color="#4A5568" />;
};

export function Roadmap() {
  return (
    <section
      id="roadmap"
      style={{
        padding: "7rem 2rem",
        background: "rgba(17,24,39,0.4)",
        borderTop: "1px solid rgba(56,189,248,0.06)",
        borderBottom: "1px solid rgba(56,189,248,0.06)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader number="06" title="Learning Roadmap" subtitle="Tracking my growth journey across different disciplines" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {tracks.map((track) => (
            <div
              key={track.label}
              style={{
                background: "rgba(26,34,56,0.6)",
                border: "1px solid rgba(56,189,248,0.1)",
                borderRadius: "20px",
                padding: "1.5rem",
                backdropFilter: "blur(20px)",
                transition: "border-color 0.25s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = `${track.color}40`)
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "rgba(56,189,248,0.1)")
              }
            >
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.25rem" }}>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: track.color,
                    boxShadow: `0 0 10px ${track.color}60`,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  {track.label}
                </span>
                {/* Progress fraction */}
                <span
                  style={{
                    marginLeft: "auto",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.68rem",
                    color: track.color,
                  }}
                >
                  {track.steps.filter((s) => s.status === "done").length}/{track.steps.length}
                </span>
              </div>

              {/* Progress bar */}
              <div
                style={{
                  height: "3px",
                  background: "rgba(56,189,248,0.08)",
                  borderRadius: "100px",
                  overflow: "hidden",
                  marginBottom: "1.25rem",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${(track.steps.filter((s) => s.status === "done").length / track.steps.length) * 100}%`,
                    background: `linear-gradient(90deg, #2563EB, ${track.color})`,
                    borderRadius: "100px",
                  }}
                />
              </div>

              {/* Steps */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {track.steps.map((step) => (
                  <div
                    key={step.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                    }}
                  >
                    {statusIcon(step.status)}
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.82rem",
                        color:
                          step.status === "done"
                            ? "#94A3B8"
                            : step.status === "active"
                            ? "#fff"
                            : "#4A5568",
                        textDecoration: step.status === "done" ? "none" : "none",
                        flex: 1,
                      }}
                    >
                      {step.name}
                    </span>
                    {step.status === "active" && step.note && (
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "0.58rem",
                          color: "#38BDF8",
                          background: "rgba(56,189,248,0.08)",
                          borderRadius: "4px",
                          padding: "0.1rem 0.35rem",
                          border: "1px solid rgba(56,189,248,0.2)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {step.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

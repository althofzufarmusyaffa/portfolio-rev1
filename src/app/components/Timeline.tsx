import { SectionHeader } from "./About";

const events = [
  {
    year: "2026",
    type: "Internship",
    title: "Mobile Developer Intern — PT Bank Syariah Nasional",
    description:
      "Worked as a Mobile Developer Intern, contributing to Flutter application development while learning professional Git workflows, version control, team collaboration, and mobile development best practices in an industry environment.",
    tag: "💼 Internship",
    color: "#2563EB",
    current: true,
  },
  {
    year: "2026",
    type: "Portfolio",
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a personal portfolio website using React, TypeScript, and Tailwind CSS to showcase projects, technical skills, and achievements.",
    tag: "🌐 Portfolio",
    color: "#3B82F6",
    current: false,
  },
  {
    year: "2025",
    type: "Project",
    title: "Smart Parking System",
    description:
      "Developed an IoT-based smart parking system using ESP32, Firebase Realtime Database, and Laravel for real-time parking slot monitoring and management.",
    tag: "🚗 Project",
    color: "#22C55E",
    current: false,
  },
  {
    year: "2025",
    type: "Learning",
    title: "Flutter Development Journey",
    description:
      "Focused on Flutter development by building mobile applications while exploring Firebase, REST APIs, and clean architecture principles.",
    tag: "📱 Learning",
    color: "#54C5F8",
    current: false,
  },
  {
    year: "2024",
    type: "Scholarship",
    title: "BSI Inspirasi Scholarship Awardee",
    description:
      "Selected as a BSI Inspirasi Scholarship awardee, participating in academic development, leadership activities, and technology-focused learning programs.",
    tag: "🏆 Scholarship",
    color: "#F59E0B",
    current: false,
  },
  {
    year: "2023",
    type: "Education",
    title: "Started Applied Computer Engineering at IPB University",
    description:
      "Began studying Applied Computer Engineering with interests in software engineering, networking, embedded systems, mobile development, and IoT.",
    tag: "🎓 Education",
    color: "#38BDF8",
    current: false,
  },
];

export function Timeline() {
  return (
    <section
      id="timeline"
      style={{
        padding: "7rem 2rem",
        background: "rgba(17,24,39,0.4)",
        borderTop: "1px solid rgba(56,189,248,0.06)",
        borderBottom: "1px solid rgba(56,189,248,0.06)",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <SectionHeader number="04" title="Experience Timeline" subtitle="Education, certifications, competitions, and milestones" />

        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "16px",
              top: "8px",
              bottom: "0",
              width: "1px",
              background: "linear-gradient(to bottom, #38BDF8, rgba(56,189,248,0.05))",
            }}
          />

          {events.map((ev, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "1.5rem",
                marginBottom: "2rem",
                position: "relative",
              }}
            >
              {/* Glowing node */}
              <div
                style={{
                  width: "33px",
                  height: "33px",
                  borderRadius: "50%",
                  background: ev.current
                    ? `linear-gradient(135deg, #2563EB, #38BDF8)`
                    : "#111827",
                  border: `2px solid ${ev.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  zIndex: 1,
                  boxShadow: ev.current
                    ? "0 0 20px rgba(56,189,248,0.5)"
                    : `0 0 12px ${ev.color}30`,
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: ev.color,
                  }}
                />
              </div>

              {/* Card */}
              <div
                style={{
                  flex: 1,
                  background: "rgba(26,34,56,0.6)",
                  border: `1px solid ${ev.current ? "rgba(56,189,248,0.3)" : "rgba(56,189,248,0.08)"}`,
                  borderRadius: "16px",
                  padding: "1.25rem 1.4rem",
                  backdropFilter: "blur(16px)",
                  boxShadow: ev.current ? "0 0 24px rgba(56,189,248,0.1)" : "none",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(56,189,248,0.25)";
                  (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = ev.current
                    ? "rgba(56,189,248,0.3)"
                    : "rgba(56,189,248,0.08)";
                  (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.65rem",
                        background: `${ev.color}18`,
                        color: ev.color,
                        border: `1px solid ${ev.color}30`,
                        borderRadius: "6px",
                        padding: "0.1rem 0.5rem",
                      }}
                    >
                      {ev.tag}
                    </span>
                    {ev.current && (
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "0.6rem",
                          color: "#38BDF8",
                          background: "rgba(56,189,248,0.1)",
                          borderRadius: "100px",
                          padding: "0.1rem 0.5rem",
                          border: "1px solid rgba(56,189,248,0.2)",
                        }}
                      >
                        Latest
                      </span>
                    )}
                  </div>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.68rem",
                      color: "#4A5568",
                    }}
                  >
                    {ev.year}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "0.4rem",
                  }}
                >
                  {ev.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.82rem",
                    color: "#94A3B8",
                    lineHeight: 1.65,
                  }}
                >
                  {ev.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

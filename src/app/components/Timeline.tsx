import { SectionHeader } from "./About";

const events = [
  {
    year: "2024",
    type: "Certification",
    title: "Awardee - BSI Scholarship Inspirasi 2024",
    description: "BSI Scholarship Inspirasi Awardee committed to continuous learning, leadership development, and creating positive social impact through education, technology, and community engagement.",
    tag: "📜 Certificate",
    color: "#F59E0B",
    current: true,
  },
  {
    year: "2024",
    type: "Certification",
    title: "Google Flutter Development — Professional",
    description: "Completed the official Google Flutter development certification covering advanced state management, animations, and platform channels.",
    tag: "📜 Certificate",
    color: "#54C5F8",
    current: false,
  },
  {
    year: "2023",
    type: "Competition",
    title: "Game Dev Jam — Top 10 Finalist",
    description: "Submitted 'Echoes of the Void', a Unity 3D puzzle game with dynamic lighting and procedural level generation. Ranked 7th out of 200 entries.",
    tag: "🎮 Competition",
    color: "#AAAAAA",
    current: false,
  },
  {
    year: "2023",
    type: "Scholarship",
    title: "STEM Excellence Scholarship",
    description: "Awarded full-ride scholarship for outstanding academic performance in Computer Engineering and active contribution to university tech clubs.",
    tag: "🎓 Scholarship",
    color: "#22C55E",
    current: false,
  },
  {
    year: "2023",
    type: "Internship",
    title: "Software Engineering Intern — TechCorp",
    description: "Built internal Flutter dashboard tool reducing reporting time by 40%. Worked with senior engineers on REST API architecture and Firebase integration.",
    tag: "💼 Internship",
    color: "#2563EB",
    current: false,
  },
  {
    year: "2023",
    type: "Freelance",
    title: "Freelance Flutter Developer",
    description: "Delivered 6 client projects including a food delivery app, a logistics tracker, and an e-commerce catalog with Stripe payments.",
    tag: "🚀 Freelance",
    color: "#A855F7",
    current: false,
  },
  {
    year: "2022",
    type: "Education",
    title: "B.Sc. Computer Engineering — Enrolled",
    description: "Started the Computer Engineering program, quickly gravitating toward mobile development, game design, and embedded systems as core focuses.",
    tag: "📚 Education",
    color: "#38BDF8",
    current: false,
  },
  {
    year: "2022",
    type: "Certification",
    title: "Cisco CCNA — Routing & Switching",
    description: "Passed the Cisco Certified Network Associate exam covering IP addressing, VLANs, routing protocols, and network security fundamentals.",
    tag: "📜 Certificate",
    color: "#1BA0D7",
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

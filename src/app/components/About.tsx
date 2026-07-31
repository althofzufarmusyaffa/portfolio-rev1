import { BookOpen, Target, MapPin, Calendar, Cpu } from "lucide-react";

const education = [
  {
    year: "2022 – Present",
    degree: "B.Sc. Computer Engineering",
    school: "University of Technology",
    status: "current",
  },
  {
    year: "2019 – 2022",
    degree: "Science & Math High School",
    school: "National STEM Academy",
    status: "done",
  },
];

const learning = [
  { item: "Advanced Flutter Architecture", progress: 72 },
  { item: "Unity DOTS & Job System", progress: 55 },
  { item: "TensorFlow & Edge AI", progress: 48 },
  { item: "AWS Cloud Fundamentals", progress: 38 },
];

export function About() {
  return (
    <section
      id="about"
      style={{ padding: "7rem 2rem", maxWidth: "1200px", margin: "0 auto" }}
    >
      <SectionHeader number="01" title="About Me" subtitle="Who I am and what drives me" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "340px 1fr",
          gap: "2.5rem",
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* Profile card */}
        <div
          style={{
            background: "rgba(26,34,56,0.6)",
            border: "1px solid rgba(56,189,248,0.12)",
            borderRadius: "22px",
            padding: "2rem",
            backdropFilter: "blur(20px)",
            boxShadow: "0 0 40px rgba(37,99,235,0.08)",
            textAlign: "center",
          }}
        >
          {/* Avatar placeholder */}
          <div
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #2563EB, #38BDF8)",
              margin: "0 auto 1.2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "3rem",
              boxShadow: "0 0 30px rgba(37,99,235,0.4)",
            }}
          >
            🧑‍💻
          </div>
          <h3
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "1.3rem",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "0.25rem",
            }}
          >
            Tofu
          </h3>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.72rem",
              color: "#38BDF8",
              marginBottom: "1.25rem",
            }}
          >
            Computer Engineer & Developer
          </p>

          {/* Info rows */}
          {[
            { icon: <MapPin size={13} />, text: "Somewhere, Earth 🌍" },
            { icon: <BookOpen size={13} />, text: "CompEng Student" },
            { icon: <Cpu size={13} />, text: "Flutter · Unity · AI · IoT" },
          ].map(({ icon, text }) => (
            <div
              key={text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                color: "#94A3B8",
                marginBottom: "0.5rem",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "#38BDF8" }}>{icon}</span>
              {text}
            </div>
          ))}

          {/* Availability */}
          <div
            style={{
              marginTop: "1.25rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(34,197,94,0.08)",
              border: "1px solid rgba(34,197,94,0.2)",
              borderRadius: "100px",
              padding: "0.3rem 0.85rem",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#22C55E",
                boxShadow: "0 0 8px rgba(34,197,94,0.6)",
                display: "block",
                animation: "pulseGreen2 2s infinite",
              }}
            />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#22C55E" }}>
              Available for work
            </span>
          </div>
        </div>

        {/* Right column */}
        <div>
          {/* Mission & objective */}
          <div
            style={{
              background: "rgba(26,34,56,0.5)",
              border: "1px solid rgba(56,189,248,0.1)",
              borderRadius: "18px",
              padding: "1.6rem",
              backdropFilter: "blur(16px)",
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
              <Target size={16} color="#38BDF8" />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.72rem",
                  color: "#38BDF8",
                  letterSpacing: "0.08em",
                }}
              >
                MISSION
              </span>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.93rem", color: "#94A3B8", lineHeight: 1.75 }}>
              To engineer technology that genuinely improves lives — whether that's a
              mobile app reaching thousands of users, an AI system that learns and adapts,
              a game world that feels alive, or an IoT device that makes everyday things smarter.
              I believe the best code is invisible: fast, elegant, and exactly what the user needed.
            </p>
          </div>

          {/* Education timeline */}
          <div
            style={{
              background: "rgba(26,34,56,0.5)",
              border: "1px solid rgba(56,189,248,0.1)",
              borderRadius: "18px",
              padding: "1.6rem",
              backdropFilter: "blur(16px)",
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.2rem" }}>
              <Calendar size={16} color="#38BDF8" />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "#38BDF8", letterSpacing: "0.08em" }}>
                EDUCATION
              </span>
            </div>
            {education.map((edu, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginBottom: i < education.length - 1 ? "1.2rem" : 0,
                  position: "relative",
                }}
              >
                {/* Timeline line */}
                {i < education.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      left: "7px",
                      top: "20px",
                      bottom: "-1.2rem",
                      width: "1px",
                      background: "rgba(56,189,248,0.15)",
                    }}
                  />
                )}
                <div
                  style={{
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                    border: `2px solid ${edu.status === "current" ? "#38BDF8" : "#1A2238"}`,
                    background: edu.status === "current" ? "#38BDF8" : "#1A2238",
                    flexShrink: 0,
                    marginTop: "3px",
                    boxShadow: edu.status === "current" ? "0 0 10px rgba(56,189,248,0.5)" : "none",
                  }}
                />
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", fontWeight: 600, color: "#fff", marginBottom: "0.15rem" }}>
                    {edu.degree}
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#94A3B8" }}>
                    {edu.school}
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#4A5568", marginTop: "0.2rem" }}>
                    {edu.year}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Learning roadmap preview */}
          <div
            style={{
              background: "rgba(26,34,56,0.5)",
              border: "1px solid rgba(56,189,248,0.1)",
              borderRadius: "18px",
              padding: "1.6rem",
              backdropFilter: "blur(16px)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.2rem" }}>
              <BookOpen size={16} color="#38BDF8" />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "#38BDF8", letterSpacing: "0.08em" }}>
                CURRENTLY LEARNING
              </span>
            </div>
            {learning.map(({ item, progress }) => (
              <div key={item} style={{ marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.35rem" }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "#D4E8FF" }}>{item}</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#38BDF8" }}>{progress}%</span>
                </div>
                <div style={{ height: "4px", background: "rgba(56,189,248,0.1)", borderRadius: "100px", overflow: "hidden" }}>
                  <div
                    style={{
                      height: "100%",
                      width: `${progress}%`,
                      background: "linear-gradient(90deg, #2563EB, #38BDF8)",
                      borderRadius: "100px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulseGreen2 {
          0%, 100% { box-shadow: 0 0 8px rgba(34,197,94,0.6); }
          50% { box-shadow: 0 0 4px rgba(34,197,94,0.2); }
        }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export function SectionHeader({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div style={{ marginBottom: "3.5rem" }}>
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.7rem",
          color: "#38BDF8",
          letterSpacing: "0.14em",
          opacity: 0.7,
        }}
      >
        {"// "}{number}
      </span>
      <h2
        style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
          fontWeight: 800,
          color: "#fff",
          lineHeight: 1.1,
          marginTop: "0.35rem",
          marginBottom: "0.5rem",
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "#94A3B8" }}>
        {subtitle}
      </p>
      <div
        style={{
          marginTop: "1rem",
          width: "48px",
          height: "3px",
          background: "linear-gradient(90deg, #2563EB, #38BDF8)",
          borderRadius: "100px",
        }}
      />
    </div>
  );
}

import { Quote } from "lucide-react";
import { SectionHeader } from "./About";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Engineer @ TechCorp",
    avatar: "👩‍💼",
    text: "Tofu has an incredible ability to rapidly prototype ideas and turn them into polished, well-architected apps. The Flutter dashboard they built for us reduced our internal reporting time by 40% — impressive for a first internship.",
    color: "#54C5F8",
  },
  {
    name: "Marcus Lin",
    role: "Game Dev Mentor, Indie Studio",
    avatar: "🧑‍🎨",
    text: "The 3D physics work in Tofu's Unity projects is well beyond what most students demonstrate. Clean C# patterns, excellent shader use, and genuine passion for the craft. Definitely one to watch.",
    color: "#AAAAAA",
  },
  {
    name: "Prof. Amira Hassan",
    role: "Computer Engineering Faculty",
    avatar: "👩‍🏫",
    text: "Few students integrate hardware and software as naturally as Tofu. Their smart parking system project was the standout submission of the semester — technically sound, practically motivated, and beautifully documented.",
    color: "#22C55E",
  },
  {
    name: "Jordan Park",
    role: "Freelance Client — Mobile App",
    avatar: "🧑‍💻",
    text: "Hired Tofu to build a food delivery app and was blown away by the result. Communication was clear, delivery was on time, and the Flutter UI was better than we imagined. Would absolutely work together again.",
    color: "#A855F7",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{ padding: "7rem 2rem", maxWidth: "1200px", margin: "0 auto" }}
    >
      <SectionHeader number="09" title="Testimonials" subtitle="What collaborators, mentors, and clients say" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {testimonials.map(({ name, role, avatar, text, color }) => (
          <div
            key={name}
            style={{
              background: "rgba(26,34,56,0.6)",
              border: "1px solid rgba(56,189,248,0.1)",
              borderRadius: "20px",
              padding: "1.75rem",
              backdropFilter: "blur(20px)",
              transition: "all 0.25s",
              cursor: "default",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = `${color}35`;
              el.style.transform = "translateY(-3px)";
              el.style.boxShadow = `0 10px 36px ${color}12`;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(56,189,248,0.1)";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            {/* Quote icon */}
            <div
              style={{
                position: "absolute",
                top: "1.2rem",
                right: "1.2rem",
                color: `${color}30`,
              }}
            >
              <Quote size={28} />
            </div>

            {/* Text */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.88rem",
                color: "#94A3B8",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
                fontStyle: "italic",
              }}
            >
              "{text}"
            </p>

            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: `${color}18`,
                  border: `1.5px solid ${color}35`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.3rem",
                }}
              >
                {avatar}
              </div>
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", fontWeight: 600, color: "#fff" }}>
                  {name}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#4A5568" }}>
                  {role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

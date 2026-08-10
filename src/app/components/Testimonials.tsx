import { Quote } from "lucide-react";
import { SectionHeader } from "./About";

const testimonials = [
    {
    name: "Lorem Ipsum",
    role: "Placeholder Testimonial",
    avatar: "👤",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    color: "#54C5F8",
  },
  {
    name: "Dolor Sit",
    role: "Placeholder Testimonial",
    avatar: "👤",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    color: "#AAAAAA",
  },
  {
    name: "Amet Consectetur",
    role: "Placeholder Testimonial",
    avatar: "👤",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    color: "#22C55E",
  },
  {
    name: "Placeholder User",
    role: "Coming Soon",
    avatar: "👤",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus.",
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

import { useState } from "react";
import { Send, Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import { SectionHeader } from "./About";

const socials = [
  { icon: <Mail size={18} />, label: "Email", handle: "tofu@example.dev", href: "mailto:tofu@example.dev", color: "#38BDF8" },
  { icon: <Github size={18} />, label: "GitHub", handle: "github.com/tofu-dev", href: "#", color: "#fff" },
  { icon: <Linkedin size={18} />, label: "LinkedIn", handle: "linkedin.com/in/tofu", href: "#", color: "#0A66C2" },
  { icon: <MessageSquare size={18} />, label: "Discord", handle: "tofu#0001", href: "#", color: "#5865F2" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  const inputStyle = (field: string) => ({
    width: "100%",
    background: "#0B1120",
    border: `1px solid ${focused === field ? "rgba(56,189,248,0.5)" : "rgba(56,189,248,0.12)"}`,
    borderRadius: "12px",
    padding: "0.75rem 1rem",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.88rem",
    color: "#fff",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box" as const,
  });

  return (
    <section
      id="contact"
      style={{
        padding: "7rem 2rem",
        background: "rgba(17,24,39,0.4)",
        borderTop: "1px solid rgba(56,189,248,0.06)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader number="10" title="Get in Touch" subtitle="Open to collaborations, freelance projects, and new opportunities" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left: Socials + info */}
          <div>
            <div
              style={{
                background: "rgba(26,34,56,0.6)",
                border: "1px solid rgba(56,189,248,0.1)",
                borderRadius: "22px",
                padding: "2rem",
                backdropFilter: "blur(20px)",
                marginBottom: "1.25rem",
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.93rem",
                  color: "#94A3B8",
                  lineHeight: 1.75,
                  marginBottom: "1.75rem",
                }}
              >
                Whether you have a project idea, a job opportunity, or just want to say hi —
                my inbox is always open. I'll do my best to get back to you within 24 hours.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {socials.map(({ icon, label, handle, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "0.85rem 1rem",
                      background: "rgba(11,17,32,0.6)",
                      border: "1px solid rgba(56,189,248,0.08)",
                      borderRadius: "14px",
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = `${color}35`;
                      el.style.background = `${color}08`;
                      el.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(56,189,248,0.08)";
                      el.style.background = "rgba(11,17,32,0.6)";
                      el.style.transform = "translateX(0)";
                    }}
                  >
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "10px",
                        background: `${color}12`,
                        border: `1px solid ${color}25`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color,
                        flexShrink: 0,
                      }}
                    >
                      {icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "#4A5568", marginBottom: "0.1rem" }}>
                        {label}
                      </div>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "#D4E8FF" }}>
                        {handle}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div
              style={{
                background: "rgba(37,99,235,0.06)",
                border: "1px solid rgba(37,99,235,0.2)",
                borderRadius: "14px",
                padding: "1rem 1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <div style={{ fontSize: "1.4rem" }}>⚡</div>
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", fontWeight: 600, color: "#fff", marginBottom: "0.15rem" }}>
                  Typical response time
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "#38BDF8" }}>
                  Under 24 hours
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              background: "rgba(26,34,56,0.6)",
              border: "1px solid rgba(56,189,248,0.1)",
              borderRadius: "22px",
              padding: "2rem",
              backdropFilter: "blur(20px)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.75rem",
                marginBottom: "0.75rem",
              }}
            >
              <div>
                <label style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#94A3B8", marginBottom: "0.35rem", fontWeight: 500 }}>
                  Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  style={inputStyle("name")}
                />
              </div>
              <div>
                <label style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#94A3B8", marginBottom: "0.35rem", fontWeight: 500 }}>
                  Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  style={inputStyle("email")}
                />
              </div>
            </div>

            <div style={{ marginBottom: "0.75rem" }}>
              <label style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#94A3B8", marginBottom: "0.35rem", fontWeight: 500 }}>
                Subject
              </label>
              <input
                type="text"
                placeholder="What's this about?"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                onFocus={() => setFocused("subject")}
                onBlur={() => setFocused(null)}
                style={inputStyle("subject")}
              />
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#94A3B8", marginBottom: "0.35rem", fontWeight: 500 }}>
                Message *
              </label>
              <textarea
                required
                placeholder="Tell me about your project or idea..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                rows={5}
                style={{
                  ...inputStyle("message"),
                  resize: "vertical",
                  fontFamily: "'Inter', sans-serif",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                padding: "0.85rem",
                background:
                  status === "sent"
                    ? "rgba(34,197,94,0.15)"
                    : "linear-gradient(135deg, #2563EB, #38BDF8)",
                border: status === "sent" ? "1px solid rgba(34,197,94,0.3)" : "none",
                borderRadius: "14px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: status === "sent" ? "#22C55E" : "#fff",
                cursor: status !== "idle" ? "not-allowed" : "pointer",
                opacity: status === "sending" ? 0.7 : 1,
                boxShadow:
                  status === "idle" ? "0 0 24px rgba(37,99,235,0.35)" : "none",
                transition: "all 0.2s",
              }}
            >
              {status === "sent" ? (
                "Message sent! I'll be in touch soon ✓"
              ) : status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  <Send size={15} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder {
          color: rgba(74, 122, 155, 0.45) !important;
        }
      `}</style>
    </section>
  );
}

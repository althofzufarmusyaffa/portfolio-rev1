import { Terminal, Github, Linkedin, Mail, MessageSquare, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer
      style={{
        background: "#071120",
        borderTop: "1px solid rgba(56,189,248,0.08)",
        padding: "3rem 2rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "2rem",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #2563EB, #38BDF8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Terminal size={14} color="#fff" />
              </div>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                tofu.dev
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                color: "#4A5568",
                maxWidth: "260px",
                lineHeight: 1.6,
              }}
            >
              Computer Engineer & Developer building software, games, AI systems, and embedded tech.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.68rem",
                color: "#38BDF8",
                letterSpacing: "0.1em",
                display: "block",
                marginBottom: "0.75rem",
              }}
            >
              NAVIGATE
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {["About", "Skills", "Projects", "Timeline", "GitHub", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const el = document.querySelector(`#${link.toLowerCase()}`);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    else window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    color: "#4A5568",
                    textAlign: "left",
                    padding: 0,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#94A3B8")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#4A5568")}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.68rem",
                color: "#38BDF8",
                letterSpacing: "0.1em",
                display: "block",
                marginBottom: "0.75rem",
              }}
            >
              CONNECT
            </span>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {[
                { icon: <Github size={16} />, label: "GitHub", href: "#" },
                { icon: <Linkedin size={16} />, label: "LinkedIn", href: "#" },
                { icon: <Mail size={16} />, label: "Email", href: "#contact" },
                { icon: <MessageSquare size={16} />, label: "Discord", href: "#" },
              ].map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "rgba(26,34,56,0.6)",
                    border: "1px solid rgba(56,189,248,0.1)",
                    color: "#4A5568",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "#38BDF8";
                    el.style.borderColor = "rgba(56,189,248,0.35)";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "#4A5568";
                    el.style.borderColor = "rgba(56,189,248,0.1)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(56,189,248,0.06)", marginBottom: "1.5rem" }} />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "#4A5568" }}>
            Designed & Developed by{" "}
            <span style={{ color: "#38BDF8", fontWeight: 600 }}>Tofu</span>
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              color: "#4A5568",
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
            }}
          >
            Made with Flutter, Figma, and{" "}
            <Heart size={13} color="#EF4444" fill="#EF4444" />
          </span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: "#2A3A4A" }}>
            © {new Date().getFullYear()} tofu.dev
          </span>
        </div>
      </div>
    </footer>
  );
}

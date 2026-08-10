import { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail, MessageSquare, Download, ExternalLink } from "lucide-react";

const roles = [
  "Computer Engineer",
  "Flutter Developer",
  "Game Developer",
  "AI Enthusiast",
  "IoT Developer",
  "Software Engineer",
];

// Floating tech bubbles for the workspace illustration
const techBubbles = [
  { label: "Flutter", color: "#54C5F8", bg: "#0C1B2E", x: "72%", y: "18%", size: 52 },
  { label: "Laravel", color: "#FF2D20", bg: "#2A0D0D", x: "88%", y: "38%", size: 48 },
  { label: "Firebase", color: "#FFCA28", bg: "#2A250D", x: "62%", y: "62%", size: 48 },
  { label: "Git", color: "#F05032", bg: "#2A0D0D", x: "82%", y: "70%", size: 44 },
  { label: "ESP32", color: "#E7352C", bg: "#1E1010", x: "55%", y: "32%", size: 44 },
  { label: "React", color: "#61DAFB", bg: "#0D1B2A", x: "78%", y: "52%", size: 42 },
  { label: "Unity", color: "#AAAAAA", bg: "#1A1A2E", x: "65%", y: "80%", size: 40 },
];

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < target.length) {
      t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 65);
    } else if (!deleting && displayed.length === target.length) {
      t = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIdx]);

  useEffect(() => {
    const t = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "7rem 2rem 4rem",
      }}
    >
      {/* Animated grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          pointerEvents: "none",
        }}
      />
      {/* Blueprint corner accent */}
      <div
        style={{
          position: "absolute",
          top: "80px",
          right: "0",
          width: "50%",
          height: "100%",
          background: "radial-gradient(ellipse at 70% 40%, rgba(37,99,235,0.08) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left: Text */}
        <div>
          {/* Status badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(56,189,248,0.08)",
              border: "1px solid rgba(56,189,248,0.2)",
              borderRadius: "100px",
              padding: "0.3rem 1rem 0.3rem 0.5rem",
              marginBottom: "1.75rem",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#22C55E",
                boxShadow: "0 0 8px rgba(34,197,94,0.6)",
                animation: "pulseGreen 2s infinite",
                display: "block",
              }}
            />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.72rem",
                color: "#94A3B8",
                letterSpacing: "0.06em",
              }}
            >
              Open to opportunities
            </span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "clamp(2.6rem, 5.5vw, 4rem)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: "0.6rem",
              letterSpacing: "-0.03em",
            }}
          >
            Hello, I'm{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2563EB, #38BDF8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Althof.
            </span>
          </h1>

          {/* Typewriter role */}
          <div
            style={{
              minHeight: "2.4rem",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
                color: "#38BDF8",
                fontWeight: 500,
              }}
            >
              {displayed}
              <span
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "1.2em",
                  background: "#38BDF8",
                  marginLeft: "1px",
                  verticalAlign: "middle",
                  opacity: cursorOn ? 1 : 0,
                }}
              />
            </span>
          </div>

          {/* Bio */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "#94A3B8",
              lineHeight: 1.75,
              maxWidth: "500px",
              marginBottom: "2.5rem",
            }}
          >
            A passionate Computer Engineering student who loves building{" "}
            <span style={{ color: "#fff" }}>software</span>,{" "}
            <span style={{ color: "#fff" }}>mobile apps</span>,{" "}
            <span style={{ color: "#fff" }}>intelligent systems</span>,{" "}
            <span style={{ color: "#fff" }}>games</span>, and{" "}
            <span style={{ color: "#fff" }}>embedded technology</span>. Turning ideas into reality, one line at a time.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <button
              onClick={() => {
                const el = document.querySelector("#projects");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.75rem 1.5rem",
                background: "linear-gradient(135deg, #2563EB, #38BDF8)",
                border: "none",
                borderRadius: "14px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#fff",
                cursor: "pointer",
                boxShadow: "0 0 24px rgba(37,99,235,0.4)",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 36px rgba(37,99,235,0.6)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(37,99,235,0.4)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <ExternalLink size={15} />
              View Projects
            </button>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.75rem 1.5rem",
                background: "rgba(26,34,56,0.8)",
                border: "1px solid rgba(56,189,248,0.25)",
                borderRadius: "14px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#fff",
                cursor: "pointer",
                backdropFilter: "blur(10px)",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#38BDF8";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 16px rgba(56,189,248,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(56,189,248,0.25)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <Download size={15} />
              Download Resume
            </button>
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.75rem 1.5rem",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "14px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#94A3B8",
                cursor: "pointer",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#fff";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#94A3B8";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
              }}
            >
              <Mail size={15} />
              Contact Me
            </button>
          </div>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {[
              { icon: <Github size={18} />, label: "GitHub", href: "#" },
              { icon: <Linkedin size={18} />, label: "LinkedIn", href: "#" },
              { icon: <Mail size={18} />, label: "Email", href: "#contact" },
              { icon: <MessageSquare size={18} />, label: "Discord", href: "#" },
            ].map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: "rgba(26,34,56,0.8)",
                  border: "1px solid rgba(56,189,248,0.12)",
                  color: "#94A3B8",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#38BDF8";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(56,189,248,0.4)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 12px rgba(56,189,248,0.2)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#94A3B8";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(56,189,248,0.12)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Workspace illustration */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "420px",
          }}
          className="hero-illustration"
        >
          {/* Main monitor */}
          <div
            style={{
              position: "relative",
              width: "280px",
              zIndex: 2,
            }}
          >
            {/* Monitor frame */}
            <div
              style={{
                background: "#111827",
                border: "2px solid rgba(37,99,235,0.3)",
                borderRadius: "14px",
                padding: "10px",
                boxShadow: "0 0 40px rgba(37,99,235,0.2), 0 20px 60px rgba(0,0,0,0.5)",
              }}
            >
              {/* Screen: VS Code */}
              <div
                style={{
                  background: "#1E1E2E",
                  borderRadius: "8px",
                  overflow: "hidden",
                  height: "190px",
                }}
              >
                {/* Tab bar */}
                <div
                  style={{
                    background: "#181825",
                    padding: "6px 10px",
                    display: "flex",
                    gap: "6px",
                    alignItems: "center",
                    borderBottom: "1px solid rgba(37,99,235,0.15)",
                  }}
                >
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#EF4444" }} />
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F59E0B" }} />
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22C55E" }} />
                  <span
                    style={{
                      marginLeft: "6px",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      color: "#6366F1",
                    }}
                  >
                    main.dart
                  </span>
                  <span
                    style={{
                      marginLeft: "8px",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      color: "#4A5568",
                    }}
                  >
                    game.cs
                  </span>
                </div>
                {/* Code content */}
                <div style={{ padding: "10px 12px", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.58rem", lineHeight: 1.7 }}>
                  <div><span style={{ color: "#818CF8" }}>class </span><span style={{ color: "#38BDF8" }}>TofuApp </span><span style={{ color: "#94A3B8" }}>{"{"}</span></div>
                  <div style={{ paddingLeft: "12px" }}><span style={{ color: "#818CF8" }}>Widget </span><span style={{ color: "#22C55E" }}>build</span><span style={{ color: "#94A3B8" }}>(context) {"{"}</span></div>
                  <div style={{ paddingLeft: "24px" }}><span style={{ color: "#818CF8" }}>return </span><span style={{ color: "#38BDF8" }}>Scaffold</span><span style={{ color: "#94A3B8" }}>(</span></div>
                  <div style={{ paddingLeft: "36px" }}><span style={{ color: "#94A3B8" }}>body: </span><span style={{ color: "#38BDF8" }}>DreamApp</span><span style={{ color: "#94A3B8" }}>(</span></div>
                  <div style={{ paddingLeft: "48px" }}><span style={{ color: "#94A3B8" }}>vision: </span><span style={{ color: "#F59E0B" }}>"build the future"</span></div>
                  <div style={{ paddingLeft: "36px", color: "#94A3B8" }}>{"),"}</div>
                  <div style={{ paddingLeft: "24px", color: "#94A3B8" }}>{");"}</div>
                  <div style={{ paddingLeft: "12px", color: "#94A3B8" }}>{"}"}</div>
                  <div style={{ color: "#94A3B8" }}>{"}"}</div>
                </div>
              </div>
            </div>
            {/* Monitor stand */}
            <div
              style={{
                width: "60px",
                height: "22px",
                background: "linear-gradient(to bottom, #1A2238, #111827)",
                margin: "0 auto",
                borderRadius: "0 0 6px 6px",
              }}
            />
            <div
              style={{
                width: "100px",
                height: "6px",
                background: "#111827",
                margin: "0 auto",
                borderRadius: "3px",
              }}
            />
          </div>

          {/* Second monitor (offset) */}
          <div
            style={{
              position: "absolute",
              right: "0",
              top: "30px",
              width: "180px",
              zIndex: 1,
              opacity: 0.85,
            }}
          >
            <div
              style={{
                background: "#111827",
                border: "1.5px solid rgba(37,99,235,0.2)",
                borderRadius: "10px",
                padding: "8px",
                boxShadow: "0 0 24px rgba(37,99,235,0.12)",
              }}
            >
              <div
                style={{
                  background: "#0F172A",
                  borderRadius: "6px",
                  height: "120px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.55rem",
                    color: "#22C55E",
                    textAlign: "center",
                  }}
                >
                  <div style={{ color: "#38BDF8" }}>$ flutter run</div>
                  <div style={{ color: "#4A5568" }}>Launching app...</div>
                  <div style={{ color: "#22C55E" }}>✓ Build complete.</div>
                  <div style={{ color: "#38BDF8", marginTop: "4px" }}>$ git push origin main</div>
                  <div style={{ color: "#22C55E" }}>✓ Deployed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating tech bubbles */}
          {techBubbles.map((b) => (
            <div
              key={b.label}
              style={{
                position: "absolute",
                left: b.x,
                top: b.y,
                transform: "translate(-50%,-50%)",
                width: `${b.size}px`,
                height: `${b.size}px`,
                borderRadius: "14px",
                background: b.bg,
                border: `1.5px solid ${b.color}30`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 0 16px ${b.color}20`,
                zIndex: 3,
                animation: `floatBubble${b.label.replace(/\s/g, "")} ${3 + Math.random() * 2}s ease-in-out infinite`,
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  color: b.color,
                  textAlign: "center",
                  lineHeight: 1.1,
                }}
              >
                {b.label}
              </span>
            </div>
          ))}

          {/* Coffee mug */}
          <div
            style={{
              position: "absolute",
              left: "4%",
              bottom: "10%",
              fontSize: "2rem",
              animation: "float1 4s ease-in-out infinite",
            }}
          >
            ☕
          </div>
          {/* Keyboard */}
          <div
            style={{
              position: "absolute",
              left: "8%",
              bottom: "28%",
              background: "#1A2238",
              border: "1px solid rgba(37,99,235,0.2)",
              borderRadius: "8px",
              padding: "6px 10px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.6rem",
              color: "#38BDF8",
              letterSpacing: "0.1em",
            }}
          >
            ⌨ MECH
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => {
          const el = document.querySelector("#about");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Scroll down"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(26,34,56,0.5)",
          border: "1px solid rgba(56,189,248,0.15)",
          borderRadius: "100px",
          padding: "0.4rem 0.9rem",
          cursor: "pointer",
          color: "#94A3B8",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.65rem",
          display: "flex",
          alignItems: "center",
          gap: "0.3rem",
          animation: "bounceDown 2.5s ease-in-out infinite",
          backdropFilter: "blur(10px)",
        }}
      >
        <ChevronDown size={14} /> scroll
      </button>

      <style>{`
        @keyframes pulseGreen {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px rgba(34,197,94,0.6); }
          50% { opacity: 0.5; box-shadow: 0 0 4px rgba(34,197,94,0.3); }
        }
        @keyframes bounceDown {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(5px); }
        }
        @keyframes float1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes floatBubbleFlutter { 0%,100%{transform:translate(-50%,-50%) translateY(0)} 50%{transform:translate(-50%,-50%) translateY(-10px)} }
        @keyframes floatBubbleUnity { 0%,100%{transform:translate(-50%,-50%) translateY(0)} 50%{transform:translate(-50%,-50%) translateY(-7px)} }
        @keyframes floatBubbleVSCode { 0%,100%{transform:translate(-50%,-50%) translateY(0)} 50%{transform:translate(-50%,-50%) translateY(-9px)} }
        @keyframes floatBubbleGit { 0%,100%{transform:translate(-50%,-50%) translateY(0)} 50%{transform:translate(-50%,-50%) translateY(-6px)} }
        @keyframes floatBubbleArduino { 0%,100%{transform:translate(-50%,-50%) translateY(0)} 50%{transform:translate(-50%,-50%) translateY(-11px)} }
        @keyframes floatBubblePy { 0%,100%{transform:translate(-50%,-50%) translateY(0)} 50%{transform:translate(-50%,-50%) translateY(-8px)} }
        @keyframes floatBubbleπ { 0%,100%{transform:translate(-50%,-50%) translateY(0)} 50%{transform:translate(-50%,-50%) translateY(-9px)} }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .hero-illustration { display: none !important; }
        }
      `}</style>
    </section>
  );
}

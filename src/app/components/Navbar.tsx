import { useState, useEffect } from "react";
import { Menu, X, Terminal, Download } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(11,17,32,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(56,189,248,0.08)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <div
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #2563EB, #38BDF8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 16px rgba(37,99,235,0.4)",
            }}
          >
            <Terminal size={16} color="#fff" />
          </div>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "1rem",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "0.02em",
            }}
          >
            tofu.dev
          </span>
        </button>

        {/* Desktop nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
          className="hidden md:flex"
        >
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.88rem",
                fontWeight: 500,
                color: "#94A3B8",
                padding: "0.4rem 0.9rem",
                borderRadius: "8px",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#38BDF8";
                (e.currentTarget as HTMLElement).style.background = "rgba(56,189,248,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#94A3B8";
                (e.currentTarget as HTMLElement).style.background = "none";
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              marginLeft: "0.5rem",
              padding: "0.45rem 1rem",
              background: "linear-gradient(135deg, #2563EB, #38BDF8)",
              border: "none",
              borderRadius: "10px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#fff",
              cursor: "pointer",
              boxShadow: "0 0 16px rgba(37,99,235,0.35)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(37,99,235,0.55)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 16px rgba(37,99,235,0.35)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <Download size={14} />
            Resume
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "rgba(26,34,56,0.8)",
            border: "1px solid rgba(56,189,248,0.2)",
            borderRadius: "10px",
            padding: "0.4rem",
            cursor: "pointer",
            color: "#38BDF8",
            display: "flex",
          }}
          className="flex md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{
            background: "rgba(11,17,32,0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(56,189,248,0.1)",
            padding: "1rem 2rem 1.5rem",
          }}
        >
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                color: "#94A3B8",
                padding: "0.7rem 0",
                borderBottom: "1px solid rgba(56,189,248,0.05)",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

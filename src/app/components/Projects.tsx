import { ExternalLink, Github, Star } from "lucide-react";
import { SectionHeader } from "./About";

const projects = [
  {
    id: 1,
    title: "Smart Parking System",
    description: "IoT-based smart parking management system with real-time slot detection, mobile app booking, and ESP32 sensors. Reduces parking search time by 60%.",
    tags: ["Flutter", "ESP32", "Firebase", "MQTT", "Arduino"],
    stars: 47,
    color: "#00979C",
    emoji: "🅿️",
    featured: true,
  },
  {
    id: 2,
    title: "Flutter Learning Hub",
    description: "Comprehensive Flutter education platform with interactive lessons, code playgrounds, quizzes, and real-time progress tracking for beginners to advanced.",
    tags: ["Flutter", "Dart", "Firebase", "REST API"],
    stars: 134,
    color: "#54C5F8",
    emoji: "📚",
    featured: true,
  },
  {
    id: 3,
    title: "Unity Game Projects",
    description: "Collection of Unity games including a 3D platformer, a roguelike dungeon crawler, and a shader-art sandbox. Showcases C# scripting and procedural generation.",
    tags: ["Unity", "C#", "Blender", "Shader Graph"],
    stars: 89,
    color: "#AAAAAA",
    emoji: "🎮",
    featured: true,
  },
  {
    id: 4,
    title: "ML Robotics Controller",
    description: "Machine learning model that controls a robotic arm using computer vision. Trained with TensorFlow and deployed on Raspberry Pi for real-time inference.",
    tags: ["Python", "TensorFlow", "OpenCV", "Raspberry Pi"],
    stars: 62,
    color: "#FF6F00",
    emoji: "🤖",
    featured: true,
  },
  {
    id: 5,
    title: "IoT Monitoring Dashboard",
    description: "Real-time environmental monitoring dashboard with temperature, humidity, and air quality sensors. Features threshold alerts and historical data charts.",
    tags: ["Flutter", "ESP32", "Firebase", "MQTT", "Dart"],
    stars: 38,
    color: "#38BDF8",
    emoji: "📡",
    featured: false,
  },
  {
    id: 6,
    title: "Computer Vision Projects",
    description: "Suite of CV experiments: face emotion detection, object tracking, gesture recognition, and lane detection for autonomous vehicle simulation.",
    tags: ["Python", "OpenCV", "TensorFlow", "NumPy"],
    stars: 55,
    color: "#5C3EE8",
    emoji: "👁️",
    featured: false,
  },
  {
    id: 7,
    title: "Portfolio Website",
    description: "This very portfolio — designed and built from scratch with a cyberpunk minimalism aesthetic, typewriter animations, and glassmorphism UI components.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    stars: 24,
    color: "#2563EB",
    emoji: "🌐",
    featured: false,
  },
  {
    id: 8,
    title: "Network Engineering Labs",
    description: "Cisco and MikroTik simulation labs with VLAN configs, routing protocols, firewall rules, and network diagrams for practical networking study.",
    tags: ["Cisco", "MikroTik", "VLAN", "Routing", "GNS3"],
    stars: 19,
    color: "#1BA0D7",
    emoji: "🔌",
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" style={{ padding: "7rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <SectionHeader number="03" title="Projects" subtitle="Things I've built, shipped, and learned from" />

      {/* Featured projects */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1.25rem",
          marginBottom: "1.25rem",
        }}
        className="projects-featured"
      >
        {projects.filter((p) => p.featured).map((p) => (
          <ProjectCard key={p.id} project={p} featured />
        ))}
      </div>

      {/* Other projects */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {projects.filter((p) => !p.featured).map((p) => (
          <ProjectCard key={p.id} project={p} featured={false} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-featured { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ProjectCard({ project, featured }: { project: (typeof projects)[0]; featured: boolean }) {
  return (
    <div
      style={{
        background: "rgba(26,34,56,0.6)",
        border: "1px solid rgba(56,189,248,0.1)",
        borderRadius: "20px",
        overflow: "hidden",
        backdropFilter: "blur(20px)",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.25s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(56,189,248,0.3)";
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = `0 12px 40px rgba(37,99,235,0.18)`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(56,189,248,0.1)";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          height: featured ? "160px" : "110px",
          background: `linear-gradient(135deg, ${project.color}18, #1A2238)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid rgba(56,189,248,0.08)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          style={{
            fontSize: featured ? "3.5rem" : "2.5rem",
            position: "relative",
            zIndex: 1,
            filter: "drop-shadow(0 0 20px rgba(255,255,255,0.1))",
          }}
        >
          {project.emoji}
        </div>
        {/* Mac dots */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "12px",
            display: "flex",
            gap: "5px",
          }}
        >
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#EF444440", display: "block" }} />
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F59E0B40", display: "block" }} />
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22C55E40", display: "block" }} />
        </div>
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "12px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            color: "#4A5568",
          }}
        >
          <Star size={10} />
          {project.stars}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.3rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: featured ? "1.1rem" : "0.95rem",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "0.5rem",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.82rem",
            color: "#94A3B8",
            lineHeight: 1.65,
            marginBottom: "1rem",
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}>
          {project.tags.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.63rem",
                color: "#38BDF8",
                background: "rgba(56,189,248,0.08)",
                border: "1px solid rgba(56,189,248,0.15)",
                borderRadius: "6px",
                padding: "0.15rem 0.5rem",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
              padding: "0.4rem 0.9rem",
              background: "rgba(37,99,235,0.15)",
              border: "1px solid rgba(37,99,235,0.3)",
              borderRadius: "8px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#38BDF8",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(37,99,235,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(37,99,235,0.15)";
            }}
          >
            <Github size={13} /> GitHub
          </a>
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
              padding: "0.4rem 0.9rem",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              color: "#94A3B8",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#fff";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#94A3B8";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            <ExternalLink size={13} /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

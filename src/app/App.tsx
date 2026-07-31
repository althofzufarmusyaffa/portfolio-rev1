import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Timeline } from "./components/Timeline";
import { Achievements } from "./components/Achievements";
import { Roadmap } from "./components/Roadmap";
import { TechStack } from "./components/TechStack";
import { GitHubActivity } from "./components/GitHubActivity";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0B1120",
        color: "#fff",
        fontFamily: "'Inter', sans-serif",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Achievements />
        <Roadmap />
        <TechStack />
        <GitHubActivity />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      <style>{`
        *, *::before, *::after {
          box-sizing: border-box;
        }
        html { scroll-behavior: smooth; }
        a { text-decoration: none; }

        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #0B1120; }
        ::-webkit-scrollbar-thumb {
          background: rgba(37,99,235,0.35);
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(56,189,248,0.5);
        }

        ::selection {
          background: rgba(37,99,235,0.35);
          color: #fff;
        }

        input, textarea {
          color-scheme: dark;
        }

        @media (max-width: 640px) {
          section { padding-left: 1rem !important; padding-right: 1rem !important; }
        }
      `}</style>
    </div>
  );
}

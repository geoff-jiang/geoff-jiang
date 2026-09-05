"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

import ClickSpark from "@/components/ClickSpark";
import CursorGlow from "@/components/CursorGlow";
import Magnet from "@/components/Magnet";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Selected work", href: "#work" },
];

const experiences = [
  {
    company: "Boeing",
    role: "Software Development Intern",
    date: "Incoming Sep 2026",
    summary: "Joining Boeing in Vancouver as a software development intern.",
    accent: "violet",
  },
  {
    company: "Craver Solutions",
    role: "Software Developer Co-op",
    date: "Aug 2025 — Apr 2026",
    summary:
      "Shipped cross-platform commerce features for more than 100 white-label mobile apps.",
    accent: "orange",
  },
  {
    company: "Stealth startup",
    role: "Founding Software Developer",
    date: "Jan 2025 — May 2025",
    summary:
      "Built the data and cloud foundation for a venture-backed market-analysis product.",
    accent: "blue",
  },
];

const featuredProjects = [
  {
    title: "Reverberations",
    year: "2026 —",
    description:
      "A language-aware change-impact engine that maps Git diffs to affected symbols, dependencies, and tests—giving coding agents a targeted verification plan instead of a hopeful guess.",
    stack: "Go / PostgreSQL / Tree-sitter / Docker / OpenTelemetry / MCP",
    image: null,
    link: null,
    kind: "system",
  },
  {
    title: "Croak Quest",
    year: "2025",
    description:
      "A 2D platformer controlled through real-time ASL gestures. Winner of Best Beginner Project at nwHacks among 700+ participants.",
    stack: "Unity / C# / Leap Motion",
    image: "/images/frog.png",
    link: "https://devpost.com/software/croak-quest",
    kind: "image",
  },
  {
    title: "Wellspring",
    year: "2024",
    description:
      "An accessible student wellness platform for meals, water, sleep, exercise, goals, and useful health resources. HackCamp finalist and accessibility award winner.",
    stack: "React / Next.js / Tailwind CSS / Figma",
    image: "/images/wellspring.png",
    link: "https://github.com/RuhaniMittal29/WellSpring",
    kind: "image",
  },
];

const archiveProjects = [
  {
    name: "KNews",
    type: "AI news platform",
    stack: "React / Django / MySQL / Redis",
    link: "https://knews-azure.vercel.app/",
  },
  {
    name: "Exercise Tracker",
    type: "Motion classification",
    stack: "Python / Pandas / Scikit-learn",
    link: "https://github.com/Khaedra/Fitness-Tracker-ML",
  },
  {
    name: "Nutrition Log",
    type: "Desktop application",
    stack: "Java / Swing / JUnit",
    link: "https://github.com/Khaedra/Nutrition-Log-App",
  },
  {
    name: "Portfolio v1",
    type: "The previous experiment",
    stack: "Next.js / Framer Motion",
    link: "https://github.com/Khaedra",
  },
];

const stack = [
  "TypeScript",
  "Python",
  "Go",
  "Java",
  "C / C++",
  "React",
  "Next.js",
  "AWS",
  "PostgreSQL",
  "Docker",
  "Supabase",
  "Redis",
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 52 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

function ProjectVisual({
  project,
}: {
  project: (typeof featuredProjects)[number];
}) {
  if (project.kind === "system") {
    return (
      <div
        className="system-visual"
        aria-label="Abstract dependency graph visualization"
      >
        <span className="node node-a">diff</span>
        <span className="node node-b">symbol</span>
        <span className="node node-c">tests</span>
        <span className="node node-d">verify</span>
        <i className="connector connector-a" />
        <i className="connector connector-b" />
        <i className="connector connector-c" />
      </div>
    );
  }

  return (
    <div className="project-image-wrap">
      <Image
        src={project.image!}
        alt={`${project.title} project preview`}
        fill
        sizes="(max-width: 800px) 100vw, 56vw"
        className="project-image"
      />
    </div>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <ClickSpark
      sparkColor="#ff6b35"
      sparkCount={7}
      sparkRadius={24}
      duration={520}
    >
      <CursorGlow />

      <motion.div
        className="intro-loader"
        initial={reduceMotion ? false : { y: 0 }}
        animate={{ y: "-105%" }}
        transition={{ duration: 0.8, delay: 0.65, ease: [0.76, 0, 0.24, 1] }}
        aria-hidden="true"
      >
        <span>GJ°</span>
        <i />
      </motion.div>

      <main className="site-shell">
        <nav className="site-nav" aria-label="Primary navigation">
          <Link
            className="wordmark"
            href="#top"
            aria-label="Geoff Jiang, back to top"
          >
            GJ<span>°</span>
          </Link>
          <div className="nav-links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <span className="availability">
            <i /> Open to 2027 roles
          </span>
        </nav>

        <section className="hero" id="top">
          <div className="hero-orbit" aria-hidden="true">
            <div className="orbit-line" />
            <span>VANCOUVER / 49.2827° N</span>
          </div>
          <motion.div
            className="hero-name"
            initial={reduceMotion ? false : { opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1>
              <span>Geoff</span>
              <span>Jiang</span>
            </h1>
          </motion.div>
          <motion.div
            className="hero-intro"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>
              I build reliable software with an inclination for developer tools
              and AI-assisted workflows.
            </p>
            <span>UBC Computer Science · Software Developer</span>
          </motion.div>
          <motion.div
            className="hero-actions"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.35 }}
          >
            <Magnet padding={54} magnetStrength={3}>
              <Link className="primary-action" href="#work">
                Explore my work
              </Link>
            </Magnet>
            <Link
              className="text-action"
              href="/documents/Geoffrey_Jiang_Resume-3.pdf"
              target="_blank"
            >
              View résumé
            </Link>
          </motion.div>
          <div className="hero-index" aria-hidden="true">
            <span>PORTFOLIO / 2026</span>
            <span>SCROLL TO ENTER</span>
          </div>
          <div className="hero-socials">
            <a
              href="https://github.com/Khaedra"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <span aria-hidden="true">GH</span>
            </a>
            <a
              href="https://www.linkedin.com/in/geoff-jiang/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <span aria-hidden="true">in</span>
            </a>
          </div>
          <div className="signal" aria-hidden="true" />
        </section>

        <section className="education" aria-label="Education">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="education-mark">UBC</span>
            <div className="education-copy">
              <h2>
                Computer Science,
                <br />
                Vancouver, British Columbia.
              </h2>
              <p>
                B.Sc. Computer Science, Co-op
                <br />
                Dean’s Scholar · 4.0 / 4.0 GPA
                <br />
                Expected May 2028
              </p>
            </div>
          </motion.div>
        </section>

        <section className="experience section-pad" id="experience">
          <header className="section-title">
            <h2>Experience</h2>
          </header>
          <div className="experience-list">
            {experiences.map((item, index) => (
              <motion.article
                key={item.company}
                className="experience-row"
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className={`experience-dot ${item.accent}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="experience-title">
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                </div>
                <div className="experience-body">
                  <p>{item.summary}</p>
                </div>
                <time>{item.date}</time>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="leadership"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="leadership-role">
              Development Team Director
              <br />
              <span>nwPlus UBC · 2025 — present</span>
            </p>
            <p className="leadership-copy">
              Leading six developers across systems for three annual hackathons
              serving 1,000+ hackers.
            </p>
            <div className="leadership-stats">
              <span>
                <strong>176/176</strong> evaluations processed
              </span>
              <span>
                <strong>3,000+</strong> applicants reached yearly
              </span>
            </div>
          </motion.div>
        </section>

        <section className="work" id="work">
          <div className="section-pad">
            <header className="section-title">
              <h2>Selected work</h2>
            </header>
          </div>
          <div className="featured-projects">
            {featuredProjects.map((project) => {
              const content = (
                <article className="featured-project">
                  <ProjectVisual project={project} />
                  <div className="project-copy">
                    <div>
                      <span>{project.year}</span>
                      {project.link ? (
                        <ArrowUpRight aria-hidden="true" />
                      ) : null}
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <small>{project.stack}</small>
                  </div>
                </article>
              );
              return project.link ? (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  {content}
                </a>
              ) : (
                <div key={project.title}>{content}</div>
              );
            })}
          </div>

          <div className="project-archive section-pad">
            <h3>More experiments</h3>
            <div>
              {archiveProjects.map((project) => (
                <a
                  key={project.name}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>{project.name}</strong>
                  <span>{project.type}</span>
                  <small>{project.stack}</small>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="stack" aria-label="Technology stack">
          <div className="marquee-track" aria-hidden="true">
            {[...stack, ...stack].map((item, index) => (
              <span key={`${item}-${index}`}>
                {item}
                <i>✦</i>
              </span>
            ))}
          </div>
          <p className="sr-only">Technologies: {stack.join(", ")}</p>
        </section>

        <footer className="contact" id="contact">
          <div className="contact-prompt">
            <span>Have a role, idea, or interesting problem?</span>
            <h2>
              Let’s make
              <br />
              something work.
            </h2>
          </div>
          <div className="contact-actions">
            <Magnet padding={70} magnetStrength={3}>
              <a className="contact-orb" href="mailto:g.jiang06@gmail.com">
                <Mail />
                Say hello
              </a>
            </Magnet>
            <div>
              <a
                href="https://github.com/Khaedra"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowUpRight />
              </a>
              <a
                href="https://www.linkedin.com/in/geoff-jiang/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight />
              </a>
              <a href="/documents/Geoffrey_Jiang_Resume-3.pdf" target="_blank">
                Résumé <ArrowUpRight />
              </a>
            </div>
          </div>
          <div className="footer-line">
            <span>Geoff Jiang © 2026</span>
            <a href="#top">Back to top ↑</a>
          </div>
        </footer>
      </main>
    </ClickSpark>
  );
}

"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
ArrowDown,
ArrowRight,
CheckCircle2,
Sparkles,
Target,
Users,
Zap,
} from "lucide-react";

export default function Hero() {
const reduceMotion = useReducedMotion();

return ( <section className="hero-section"> <div className="hero-grid" aria-hidden="true" />

```
  <div className="container hero-layout">
    <motion.div
      className="hero-content"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="eyebrow">
        <Sparkles size={15} />
        <span>AI-POWERED TEAM COLLABORATION</span>
      </div>

      <h1>
        Turn Every Meeting Into{" "}
        <span className="gradient-text">Momentum.</span>
      </h1>

      <p className="hero-description">
        Transform team discussions into clear action items, organized
        projects, and measurable progress. Work smarter, collaborate
        better, and keep every team member aligned.
      </p>

      <div className="hero-actions">
        <Link href="/register" className="button button-primary">
          Launch Workspace
          <ArrowRight size={18} />
        </Link>

        <Link href="/#features" className="button button-secondary">
          Explore Features
        </Link>
      </div>

      <div className="hero-highlights">
        <div>
          <CheckCircle2 size={17} />
          <span>Structured action plans</span>
        </div>

        <div>
          <CheckCircle2 size={17} />
          <span>Team-focused workflows</span>
        </div>
      </div>
    </motion.div>

    <motion.div
      className="hero-visual"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.15 }}
    >
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />

      <motion.div
        className="ai-core"
        animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="ai-core-inner">
          <Sparkles size={43} />
          <span>AI CORE</span>
        </div>
      </motion.div>

      <motion.div
        className="floating-card floating-card-top"
        animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        <div className="mini-card-icon cyan-icon">
          <Zap size={17} />
        </div>

        <div>
          <strong>AI Analysis</strong>
          <p>Meeting processed</p>
        </div>

        <CheckCircle2 className="success-icon" size={19} />
      </motion.div>

      <motion.div
        className="floating-card floating-card-bottom"
        animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="mini-card-icon violet-icon">
          <Target size={18} />
        </div>

        <div>
          <strong>Action Plan</strong>
          <p>Tasks ready for review</p>
        </div>
      </motion.div>

      <div className="visual-stat stat-left">
        <Users size={17} />
        <span>Team aligned</span>
      </div>

      <div className="visual-stat stat-right">
        <CheckCircle2 size={17} />
        <span>Progress tracked</span>
      </div>
    </motion.div>
  </div>

  <a href="#problem" className="scroll-indicator">
    Discover the workflow
    <ArrowDown size={15} />
  </a>
</section>
);
}

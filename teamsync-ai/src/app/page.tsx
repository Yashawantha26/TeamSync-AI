import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import TeamSection from "@/components/landing/TeamSection";
import Footer from "@/components/landing/Footer";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        <section id="problem" className="section problem-section">
          <div className="container problem-layout">
            <div>
              <span className="section-label">THE PROBLEM</span>
              <h2>Great ideas should never get lost in meetings.</h2>
            </div>
            <p>
              Teams often leave meetings with unclear responsibilities,
              forgotten tasks, missed deadlines, and decisions scattered
              across messages. TeamSync AI transforms discussions into
              organized, reviewable action plans.
            </p>
          </div>
        </section>

        <section className="solution-strip">
          <div className="container flex items-center justify-center gap-4 flex-wrap">
            <span>Meeting Discussion</span>
            <span className="solution-arrow">→</span>
            <span>AI Analysis</span>
            <span className="solution-arrow">→</span>
            <span>Task Proposals</span>
            <span className="solution-arrow">→</span>
            <span>Team Approval</span>
            <span className="solution-arrow">→</span>
            <span>Project Progress</span>
          </div>
        </section>

        <Features />
        <HowItWorks />

        <section className="cta-section">
          <div className="container cta-panel text-center">
            <span className="section-label">WORK BETTER TOGETHER</span>
            <h2 className="mt-4">
              Make your next meeting
              <br />
              <span className="gradient-text">more productive.</span>
            </h2>
            <p className="mt-4">
              Bring your discussions, decisions, and project actions into one
              organized workspace.
            </p>
            <Link href="/register" className="button button-primary mt-6 inline-block">
              Start Collaborating
            </Link>
          </div>
        </section>

        <TeamSection />
      </main>

      <Footer />
    </div>
  );
}